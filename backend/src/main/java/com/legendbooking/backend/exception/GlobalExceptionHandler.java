package com.legendbooking.backend.exception;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorResponse> handleValidation (
		MethodArgumentNotValidException ex,
		HttpServletRequest request
	){
		Map<String, String> errors = new HashMap<>();

		ex.getBindingResult()
			.getFieldErrors()
			.forEach(
				error -> errors.put(
					error.getField(),
					error.getDefaultMessage()
				)
			);

		ErrorResponse response = new ErrorResponse(
			Instant.now().toString(),
			400,
			"Bad Request",
			"Validation failed",
			errors,
			request.getRequestURI()
		);

		return ResponseEntity.badRequest().body(response);
	}
}
