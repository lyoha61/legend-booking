package com.legendbooking.backend.exception;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(BusinessException.class)
  public ResponseEntity<ErrorResponse> handleBusinessException(
    BusinessException ex,
    HttpServletRequest request
  ) {
      ErrorResponse response = new ErrorResponse(
        Instant.now().toString(),
        ex.getStatus().value(),
        ex.getStatus().getReasonPhrase(),
        ex.getCode(),
        ex.getMessage(),
        null,
        request.getRequestURI()
      );

      return ResponseEntity
      	.status(ex.getStatus())
      	.body(response);
  }

	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<?> handleMissingBody(
		HttpMessageNotReadableException ex,
		HttpServletRequest request
	) {
		ErrorResponse response = new ErrorResponse(
			Instant.now().toString(),
			400,
			"Bad Request",
			"INVALID_REQUEST",
			"Request body is missing or invalid",
			null,
			request.getRequestURI()
    );

    return ResponseEntity
			.status(HttpStatus.BAD_REQUEST)
			.body(response);
	}

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
			"VALIDATION_FAILED",
			"Validation failed",
			errors,
			request.getRequestURI()
		);

		return ResponseEntity.badRequest().body(response);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleAllUncaughtExceptions(
	   Exception ex,
	   HttpServletRequest request
	){
	   	ErrorResponse response = new ErrorResponse(
        Instant.now().toString(),
        500,
        "Internal Server Error",
        "INTERNAL_SERVER_ERROR",
        "An unexpected error occurred. Please try again later.",
        null,
        request.getRequestURI()
	    );

	    return ResponseEntity
	      .status(HttpStatus.INTERNAL_SERVER_ERROR)
	      .body(response);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ErrorResponse> handleDuplicateUser(
		DataIntegrityViolationException ex,
		HttpServletRequest request
	){
		ErrorResponse response = new ErrorResponse(
			Instant.now().toString(),
			409,
			"Conflict",
			"CONFLICT",
			"Database conflict",
			null,
		 	request.getRequestURI()
		);

		return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
	}
}
