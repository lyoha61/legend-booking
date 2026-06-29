package com.legendbooking.backend.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record RefreshTokenRequest(
	@NotBlank(message = "Required refresh token")
	String refreshToken
) {
}
