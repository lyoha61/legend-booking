package com.legendbooking.backend.apartment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.legendbooking.backend.apartment.Apartment;
import com.legendbooking.backend.apartment.dto.CreateApartmentRequest;

@Mapper(componentModel = "spring")
public interface ApartmentMapper {
	@Mapping(source = "price", target = "pricePerNight")
	@Mapping(source = "area", target = "areaSqm")
	Apartment toEntity(CreateApartmentRequest data);
}
