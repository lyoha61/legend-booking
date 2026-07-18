package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class PaymentAlreadyCanceledException extends BusinessException {
	public PaymentAlreadyCanceledException() {
		super("PAYMENT_ALREADY_CANCELED", "Payment already canceled", HttpStatus.CONFLICT);
	}
}
