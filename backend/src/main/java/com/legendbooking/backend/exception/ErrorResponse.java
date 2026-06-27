package com.legendbooking.backend.exception;

import java.util.Map;

public record ErrorResponse(
	String timestamp,
	int status,
	String error,
	String message,
	Map<String,String> errors,
	String path
) {
}
