package com.legendbooking.backend.owner;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, UUID>{
	Optional<Owner> findByUserId(UUID userId);
}
