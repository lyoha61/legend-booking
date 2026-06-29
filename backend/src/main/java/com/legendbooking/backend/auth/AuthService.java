package com.legendbooking.backend.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.legendbooking.backend.auth.dto.AuthResponse;
import com.legendbooking.backend.auth.dto.JwtTokens;
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

	private final UserRepository repository;
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

	public void register(RegisterRequest request) {
		UserEntity user = new UserEntity();

		user.setEmail(request.email());
		user.setPassword(
			passwordEncoder.encode(request.password())
		);

		repository.save(user);
	}

	public AuthResponse login(RegisterRequest request) {
		UserEntity user = repository.findByEmail(request.email())
			.orElseThrow(() -> new InvalidCredentialsException("Invalid email or password")
		);

		if (!passwordEncoder.matches(
			request.password(),
			user.getPassword()
		))
			throw new InvalidCredentialsException("Invalid email or password");

		JwtTokens tokens = generateTokens(user);

		saveRefreshToken(tokens.refreshToken(), user);

		return new AuthResponse(
			tokens.accessToken(),
			tokens.refreshToken().token(),
			tokens.refreshToken().expiresAt()
		);
	}
}
