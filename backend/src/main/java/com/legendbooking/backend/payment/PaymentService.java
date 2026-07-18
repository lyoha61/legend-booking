package com.legendbooking.backend.payment;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legendbooking.backend.exception.PaymentNotFoundException;

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

	@Transactional
	public PaymentEntity pay(UUID id) {
		PaymentEntity paymentEntity = paymentRepository.findById(id).orElseThrow(
			() -> new PaymentNotFoundException()
		);

		paymentEntity.setStatus(PaymentStatus.PAID);

		return paymentEntity;
	}
}
