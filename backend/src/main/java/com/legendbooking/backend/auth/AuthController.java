package com.legendbooking.backend.auth;

import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legendbooking.backend.auth.dto.ResponseLogin;
import com.legendbooking.backend.user.UserEntity;

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
	public ResponseEntity<ResponseLogin> login (
		@Valid @RequestBody RegisterRequest request
	) {
		ResponseLogin user = service.login(request);

		return ResponseEntity.ok(user);
	}
}
