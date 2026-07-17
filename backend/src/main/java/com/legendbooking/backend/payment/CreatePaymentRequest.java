package com.legendbooking.backend.payment;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotNull;

public record CreatePaymentRequest(
	@NotNull
	BigDecimal amount
) {}
