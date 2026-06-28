package com.legendbooking.backend.auth;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.legendbooking.backend.auth.dto.ResponseLogin;
import com.legendbooking.backend.exception.InvalidCredentialsException;
import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;

	public void register(RegisterRequest request) {
		UserEntity user = new UserEntity();

		user.setEmail(request.email());
		user.setPassword(
			passwordEncoder.encode(request.password())
		);

		repository.save(user);
	}

	public ResponseLogin login(RegisterRequest request) {
		UserEntity user = repository.findByEmail(request.email())
			.orElseThrow(() -> new InvalidCredentialsException("Invalid email or password")
			);

		return new ResponseLogin(
			user.getId(),
			user.getEmail(),
			user.getFirstName(),
			user.getLastName(),
			user.getPhone(),
			user.getCreatedAt(),
			user.getUpdatedAt()
		);
	}
}
