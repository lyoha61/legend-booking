package com.legendbooking.backend.token;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import jakarta.persistence.LockModeType;

public interface RefreshTokenRepository extends JpaRepository<RefreshTokenEntity, UUID> {
	public Optional<RefreshTokenEntity> findByToken(String token);
	@Lock(LockModeType.PESSIMISTIC_WRITE)
	public Optional<RefreshTokenEntity> findByTokenAndRevokedAtIsNull(String token);
}
