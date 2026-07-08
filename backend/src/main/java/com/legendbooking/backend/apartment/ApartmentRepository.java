package com.legendbooking.backend.apartment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ApartmentRepository extends JpaRepository<Apartment, UUID> {
	List<Apartment> findAllByOwnerId(UUID ownerId);
}
