package com.legendbooking.backend.security;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.legendbooking.backend.security.dto.GeneratedToken;
import com.legendbooking.backend.user.UserEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(
		"test-key-test-key-test-key-test-key"
		.getBytes()
	);

	public GeneratedToken generateToken(UserEntity user, TokenType type ) {
		Instant expiration = Instant.now().plusMillis(type.getExpiration());

		String token = Jwts.builder()
			.subject(user.getId().toString())
			.claim("email", user.getEmail())
			.claim("type", type.name())
			.claim("role", user.getRole())
			.issuedAt(new Date())
			.expiration(Date.from(expiration))
			.signWith(SECRET_KEY)
			.compact();

		return new GeneratedToken(token, expiration);
	}

	public UUID extractUserId(String token) {
		return UUID.fromString(Jwts.parser()
			.verifyWith(SECRET_KEY)
			.build()
			.parseSignedClaims(token)
			.getPayload()
			.getSubject()
		);
	}

}
