package com.legendbooking.backend.token;

import java.time.Instant;
import java.util.UUID;

import com.legendbooking.backend.user.UserEntity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "refresh_tokens")
public class RefreshTokenEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(unique = true, length = 500, nullable = false)
	private String token;

	@ManyToOne()
	@JoinColumn(nullable = false, name = "user_id")
	private UserEntity user;

	@Column(nullable = false, name = "expires_at")
	private Instant expiresAt;

	@Column(nullable = false, name = "created_at")
	private Instant createdAt;

	@PrePersist
	protected void onCreate() {
		createdAt = Instant.now();
	}
}
