package com.legendbooking.backend.auth;

import java.time.Duration;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legendbooking.backend.auth.dto.AuthResponse;
import com.legendbooking.backend.auth.dto.JwtTokens;
import com.legendbooking.backend.security.dto.GeneratedToken;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService service;

	@Value("${app.cookie.secure}")
	private boolean secure;

	private ResponseCookie createRefreshCookie(GeneratedToken refreshToken) {
		return ResponseCookie.from("refresh_token", refreshToken.token())
			.httpOnly(true)
			.secure(secure)
			.sameSite("Strict")
			.path("/api/auth")
			.maxAge(
				Duration.between(
					Instant.now(),
					refreshToken.expiresAt()
				)
			)
			.build();
	}

	@PostMapping("/register")
	public ResponseEntity<AuthResponse> register(
		@Valid @RequestBody RegisterRequest request
	){
		JwtTokens tokens = service.register(request);

		ResponseCookie cookie = createRefreshCookie(tokens.refreshToken());

		return ResponseEntity.ok()
			.header(HttpHeaders.SET_COOKIE, cookie.toString())
			.body(new AuthResponse(tokens.accessToken()));
	}

	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(
		@Valid @RequestBody RegisterRequest request
	) {
		JwtTokens tokens = service.login(request);

		ResponseCookie cookie = createRefreshCookie(tokens.refreshToken());

		return ResponseEntity.ok()
			.header(HttpHeaders.SET_COOKIE, cookie.toString())
			.body(new AuthResponse(tokens.accessToken()));
	}

	@PostMapping("/refresh")
	public ResponseEntity<AuthResponse> refreshToken(
		@CookieValue("refresh_token") String refreshToken
	) {
		JwtTokens tokens = service.refreshToken(refreshToken);

		ResponseCookie cookie = createRefreshCookie(tokens.refreshToken());

		return ResponseEntity.ok()
			.header(HttpHeaders.SET_COOKIE, cookie.toString())
			.body(new AuthResponse(tokens.accessToken()));
	}

	@PostMapping("/logout")
	public ResponseEntity<Void> logout(
		@CookieValue("refresh_token") String refreshToken
	) {
		service.logout(refreshToken);

		ResponseCookie cookie = ResponseCookie.from(
				"refresh_token",
				""
			)
			.httpOnly(true)
			.secure(secure)
			.sameSite("Strict")
			.path("/api/auth")
			.maxAge(0)
			.build();

		return ResponseEntity.noContent()
			.header(HttpHeaders.SET_COOKIE, cookie.toString())
			.build();
	}
}
