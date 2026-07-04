package com.legendbooking.backend.auth;

import java.time.Instant;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.legendbooking.backend.auth.dto.JwtTokens;
import com.legendbooking.backend.exception.EmailAlreadyExistsException;
import com.legendbooking.backend.exception.InvalidCredentialsException;
import com.legendbooking.backend.security.JwtService;
import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.UserRepository;
import com.legendbooking.backend.user.dto.UserDto;
import com.legendbooking.backend.user.mapper.UserMapper;

import jakarta.transaction.Transactional;

import com.legendbooking.backend.security.TokenType;
import com.legendbooking.backend.security.dto.GeneratedToken;
import com.legendbooking.backend.token.RefreshTokenEntity;
import com.legendbooking.backend.token.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

	private final UserRepository userRepository;
	private final RefreshTokenRepository refreshTokenRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final UserMapper userMapper;

	private JwtTokens generateTokens(UserEntity user) {
		String accessToken = jwtService.generateToken(user, TokenType.ACCESS).token();
		GeneratedToken refreshToken = jwtService.generateToken(user, TokenType.REFRESH);

		return new JwtTokens(accessToken, refreshToken);
	}

	private void saveRefreshToken(GeneratedToken token, UserEntity user) {

		RefreshTokenEntity refreshTokenEntity = new RefreshTokenEntity();
		refreshTokenEntity.setToken(token.token());
		refreshTokenEntity.setUser(user);
		refreshTokenEntity.setExpiresAt(token.expiresAt());

		refreshTokenRepository.save(refreshTokenEntity);
	}

	public JwtTokens register(RegisterRequest request) {
		UserEntity user = new UserEntity();

		user.setEmail(request.email());
		user.setPassword(
			passwordEncoder.encode(request.password())
		);

		if (userRepository.existsByEmail(user.getEmail()))
			throw new EmailAlreadyExistsException();

		UserEntity savedUser =  userRepository.save(user);

		JwtTokens tokens = generateTokens(savedUser);

		saveRefreshToken(tokens.refreshToken(), user);

		return tokens;
	}

	public JwtTokens login(RegisterRequest request) {
		UserEntity user = userRepository.findByEmail(request.email())
			.orElseThrow(() -> new InvalidCredentialsException("Invalid email or password")
		);

		if (!passwordEncoder.matches(
			request.password(),
			user.getPassword()
		))
			throw new InvalidCredentialsException("Invalid email or password");

		JwtTokens tokens = generateTokens(user);

		saveRefreshToken(tokens.refreshToken(), user);

		return tokens;
	}

	@Transactional
	public JwtTokens refreshToken(String token) {
		try {
			RefreshTokenEntity refreshTokenEntity =
				refreshTokenRepository.findByToken(token)
					.orElseThrow(
						() -> new InvalidCredentialsException("Invalid token refresh")
					);

			if (refreshTokenEntity.getRevokedAt() != null) {
				throw new InvalidCredentialsException("Token already refreshed");
			}

			if (refreshTokenEntity.getExpiresAt().isBefore(Instant.now())){
				refreshTokenEntity.setRevokedAt(Instant.now());
				refreshTokenRepository.save(refreshTokenEntity);

				throw new InvalidCredentialsException("Refresh token is expired");
			}

			UserEntity user = refreshTokenEntity.getUser();

			refreshTokenEntity.setRevokedAt(Instant.now());
			refreshTokenRepository.save(refreshTokenEntity);

			JwtTokens tokens = generateTokens(user);

			saveRefreshToken(
	      tokens.refreshToken(),
	      user
	    );

	    return tokens;
		} catch (Exception ex) {
			log.error("Error", ex);
			throw ex;
			// throw new RuntimeException("Error " + ex.getMessage());
		}

	}

	public void logout(String token) {
		RefreshTokenEntity refreshToken = refreshTokenRepository.findByToken(token)
			.orElseThrow(
				() -> new InvalidCredentialsException("Invalid refresh token")
			);

		refreshTokenRepository.delete(refreshToken);
	}

	public UserDto me(String header) {
		String token = jwtService.extractToken(header);
		String email = jwtService.extractClaim(token, "email");

		UserEntity user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

		return userMapper.toDto(user);
	}
}
