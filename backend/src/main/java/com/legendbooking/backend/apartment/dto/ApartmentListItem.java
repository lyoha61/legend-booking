package com.legendbooking.backend.apartment.dto;

import java.util.UUID;
import java.math.BigDecimal;

public record ApartmentListItem(
	UUID id,
	String name,
	String number,
	Integer floor,
	BigDecimal areaSqm,
	Integer maxGuests,
	Integer roomsCount,
	String ownerName,
	String imageUrl
) {}
