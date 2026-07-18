package com.legendbooking.backend.booking;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<BookingEntity, UUID> {
	
}
