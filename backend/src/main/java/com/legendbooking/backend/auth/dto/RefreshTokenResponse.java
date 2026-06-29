package com.legendbooking.backend.auth.dto;

import java.time.Instant;

public record RefreshTokenResponse(
	String accessToken,
	Instant expiresAt
) {
}
