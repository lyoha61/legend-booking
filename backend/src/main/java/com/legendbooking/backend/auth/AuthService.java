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
import com.legendbooking.backend.security.TokenType;
import com.legendbooking.backend.security.dto.GeneratedToken;
import com.legendbooking.backend.token.RefreshTokenEntity;
import com.legendbooking.backend.token.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

	private final UserRepository userRepository;
	private final RefreshTokenRepository refreshTokenRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

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

	public JwtTokens refreshToken(String token) {
		Optional<RefreshTokenEntity> tokenEntity = refreshTokenRepository.findByToken(token);

		if (tokenEntity.isEmpty())
			throw new InvalidCredentialsException("Invalid token refresh");

		RefreshTokenEntity refreshTokenEntity = tokenEntity.get();

		if (refreshTokenEntity.getExpiresAt().isBefore(Instant.now())){
			refreshTokenRepository.delete(refreshTokenEntity);
			throw new InvalidCredentialsException("Refresh token is expired");
		}

		UserEntity user = refreshTokenEntity.getUser();
		refreshTokenRepository.delete(refreshTokenEntity);
		JwtTokens tokens = generateTokens(user);

		saveRefreshToken(
      tokens.refreshToken(),
      user
    );

    return tokens;
	}

	public void logout(String token) {
		RefreshTokenEntity refreshToken = refreshTokenRepository.findByToken(token)
			.orElseThrow(
				() -> new InvalidCredentialsException("Invalid refresh token")
			);

		refreshTokenRepository.delete(refreshToken);
	}
}
