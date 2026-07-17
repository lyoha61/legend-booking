package com.legendbooking.backend.payment;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "payments")
@Setter
@Getter
public class PaymentEntity {
	@Id
	@GeneratedValue
	private UUID id;

	@Column(nullable = false)
	private BigDecimal amount;

	@Enumerated(EnumType.STRING)
	@JdbcTypeCode(SqlTypes.NAMED_ENUM)
	@Column(nullable = false)
	private PaymentStatus status;

	@Column(nullable = false)
	private Instant createdAt;

	@Column(nullable = false)
	private Instant updatedAt;

	@PrePersist
	private void onCreate() {
		status = PaymentStatus.PENDING;
		
		Instant now = Instant.now();
		createdAt = now;
		updatedAt = now;
	}
}
