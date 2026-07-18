package com.legendbooking.backend.payment;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.legendbooking.backend.exception.PaymentAlreadyCanceledException;
import com.legendbooking.backend.exception.PaymentAlreadyPaidException;
import com.legendbooking.backend.exception.PaymentNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {

	public final PaymentRepository paymentRepository;

	private PaymentEntity getPayment(UUID id) {
		return paymentRepository.findById(id).orElseThrow(
			() -> new PaymentNotFoundException()
		);
	}

	public PaymentEntity create(CreatePaymentRequest request) {
		
		PaymentEntity paymentEntity = new PaymentEntity();
		paymentEntity.setAmount(request.amount());

		return paymentRepository.save(paymentEntity);
	}

	@Transactional
	public PaymentEntity pay(UUID id) {
		PaymentEntity paymentEntity = getPayment(id);

		if (paymentEntity.getStatus() == PaymentStatus.PAID)
			throw new PaymentAlreadyPaidException();

		paymentEntity.setStatus(PaymentStatus.PAID);

		return paymentEntity;
	}

	@Transactional
	public PaymentEntity cancel(UUID id) {
		PaymentEntity paymentEntity = getPayment(id);

		if (paymentEntity.getStatus() == PaymentStatus.CANCELED)
			throw new PaymentAlreadyCanceledException();

		paymentEntity.setStatus(PaymentStatus.CANCELED);

		return paymentEntity;
	}
}
