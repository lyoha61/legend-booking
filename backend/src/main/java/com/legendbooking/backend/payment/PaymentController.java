package com.legendbooking.backend.payment;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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

	@PostMapping("/{id}/pay")
	public ResponseEntity<?> pay(
		@PathVariable UUID id
	) {
		PaymentEntity payment = paymentService.pay(id);
		return ResponseEntity.ok(payment);
	}
}
