package com.legendbooking.backend.security;

public enum TokenType {
	ACCESS(1000 * 60 * 15),
	REFRESH(1000L * 60 * 60 * 24 * 30);

	private final long expiration;

	TokenType(long expiration) {
		this.expiration = expiration;
	}

	public long getExpiration() {
		return expiration;
	}
}
