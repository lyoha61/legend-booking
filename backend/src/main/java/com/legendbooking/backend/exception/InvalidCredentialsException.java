package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class InvalidCredentialsException extends BusinessException {
	public InvalidCredentialsException(String message) {
		super(
			"INVALID_CREDENTIALS",
			message,
			HttpStatus.UNAUTHORIZED
		);
	}
}
