package com.legendbooking.backend.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
}
