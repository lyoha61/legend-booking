package com.legendbooking.backend.token;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshTokenEntity, UUID> {
	public Optional<RefreshTokenEntity> findByToken(String token);
}
