package com.legendbooking.backend.auth.dto;

import com.legendbooking.backend.security.dto.GeneratedToken;

public record JwtTokens(
	String accessToken,
	GeneratedToken refreshToken
) {}
