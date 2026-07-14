package com.legendbooking.backend.apartment.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateApartmentRequest(
	@NotBlank
	String name,
	@NotBlank
	String number,
	Number floor,
	Number area,
	Number roomsCount,
	Number maxGuests,
	Number price
) {}
