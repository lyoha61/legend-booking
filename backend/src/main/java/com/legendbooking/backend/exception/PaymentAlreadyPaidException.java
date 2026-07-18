package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class PaymentAlreadyPaidException extends BusinessException {
	public PaymentAlreadyPaidException() {
		super("PAYMENT_ALREADY_PAID", "Payment already paid", HttpStatus.CONFLICT);
	}
}
