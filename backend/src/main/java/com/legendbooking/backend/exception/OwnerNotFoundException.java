package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class OwnerNotFoundException extends BusinessException {
	public OwnerNotFoundException() {
		super("OWNER_NOT_FOUND", "User is not an owner", HttpStatus.FORBIDDEN);
	}
}
