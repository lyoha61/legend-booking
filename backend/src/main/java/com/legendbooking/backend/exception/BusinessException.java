package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public abstract class BusinessException extends RuntimeException {

		private final String code;
    private final HttpStatus status;

    protected BusinessException(
			String code,
			String message,
			HttpStatus status
		) {
			super(message);
			this.code = code;
			this.status = status;
		}
}
