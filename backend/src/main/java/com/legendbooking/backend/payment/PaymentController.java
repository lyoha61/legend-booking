package com.legendbooking.backend.payment;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {
	private final PaymentService paymentService;

	@PostMapping("/create")
	public ResponseEntity<?> create (
		@Valid @RequestBody CreatePaymentRequest request
	) {
		PaymentEntity payment =  paymentService.create(request);
		return ResponseEntity.ok(payment);
	}
}
