package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class ApartmentNotFoundException extends BusinessException {
	public ApartmentNotFoundException() {
		super("APARTMENT_NOT_FOUND", "APARTMENT not found", HttpStatus.NOT_FOUND);
	}
}
