package com.legendbooking.backend.booking.dto;

import java.time.LocalDate;
import java.util.UUID;

public record CreateBookingRequest(
	UUID apartmentId,
	LocalDate checkIn,
	LocalDate checkOut,
	Integer guests
) {}
