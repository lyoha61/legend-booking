package com.legendbooking.backend.auth.dto;

import java.time.Instant;

public record AuthResponse(
	String accessToken
) {
}
