package com.legendbooking.backend.security.dto;

import java.time.Instant;

public record GeneratedToken(
	String token,
	Instant expiresAt
) {
}
