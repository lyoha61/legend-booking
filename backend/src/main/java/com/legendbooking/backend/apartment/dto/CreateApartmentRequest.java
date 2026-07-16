package com.legendbooking.backend.apartment.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CreateApartmentRequest(
	@NotBlank
	String name,

	@NotBlank
	String number,

	@NotNull
	@Positive
	Integer floor,

	@NotNull
	@Positive
	BigDecimal area,

	@NotNull
	@Positive
	Integer roomsCount,

	@NotNull
	@Positive
	Integer maxGuests,

	@NotNull
	@Positive
	BigDecimal price
) {}
