package com.legendbooking.backend.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

	private final UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) {

		UserEntity user = repository.findByEmail(email).orElseThrow();

		return User.builder()
			.username(user.getEmail())
			.password(user.getPassword())
			.build();
	}
}
