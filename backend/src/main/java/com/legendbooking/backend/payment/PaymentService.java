package com.legendbooking.backend.payment;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {

	public final PaymentRepository paymentRepository;

	public PaymentEntity create(CreatePaymentRequest request) {
		
		PaymentEntity paymentEntity = new PaymentEntity();
		paymentEntity.setAmount(request.amount());

		return paymentRepository.save(paymentEntity);
	}
}
