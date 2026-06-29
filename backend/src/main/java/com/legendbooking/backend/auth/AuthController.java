package com.legendbooking.backend.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legendbooking.backend.auth.dto.AuthResponse;
import com.legendbooking.backend.auth.dto.RefreshTokenRequest;
import com.legendbooking.backend.auth.dto.RefreshTokenResponse;
import com.legendbooking.backend.security.dto.GeneratedToken;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService service;

	@PostMapping("/register")
	public void register(
		@Valid @RequestBody RegisterRequest request
	){
		service.register(request);
	}

	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login (
		@Valid @RequestBody RegisterRequest request
	) {
		AuthResponse tokens = service.login(request);

		return ResponseEntity.ok(tokens);
	}

	@PostMapping("/refresh")
	public ResponseEntity<AuthResponse> refreshToken (
		@Valid @RequestBody RefreshTokenRequest request
	) {
		AuthResponse tokens = service.refreshToken(request.refreshToken());

		return ResponseEntity.ok(tokens);
	}
}
