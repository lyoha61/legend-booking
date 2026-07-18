package com.legendbooking.backend.exception;

import org.springframework.http.HttpStatus;

public class PaymentNotFoundException extends BusinessException {
		public PaymentNotFoundException() {
			super("PAYMENT_NOT_FOUND",	"Payment not found", HttpStatus.NOT_FOUND);
		}
}
