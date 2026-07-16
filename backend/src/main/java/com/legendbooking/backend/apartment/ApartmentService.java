package com.legendbooking.backend.apartment;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.legendbooking.backend.apartment.dto.CreateApartmentRequest;
import com.legendbooking.backend.apartment.mapper.ApartmentMapper;
import com.legendbooking.backend.exception.OwnerNotFoundException;
import com.legendbooking.backend.owner.Owner;
import com.legendbooking.backend.owner.OwnerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApartmentService {

	private final ApartmentRepository apartmentRepository;
	private final OwnerRepository ownerRepository;
	private final ApartmentMapper apartmentMapper;

	public List<Apartment> getAll() {
		return apartmentRepository.findAll();
	}

	public List<Apartment> getOwnerApartments(UUID userId) {
		Owner owner = ownerRepository.findByUserId(userId)
			.orElseThrow(() -> new OwnerNotFoundException());

		List<Apartment> apartments = apartmentRepository.findAllByOwnerId(owner.getId());

		return apartments;
	}

	public Apartment createApartment(CreateApartmentRequest data, UUID userId) {
		Owner owner = ownerRepository.findByUserId(userId)
			.orElseThrow(() -> new OwnerNotFoundException());

		Apartment rawApartment = apartmentMapper.toEntity(data);
		rawApartment.setOwner(owner);

		Apartment apartment = apartmentRepository.save(rawApartment);

		return apartment;
	}

	public Optional<Apartment> getById(UUID id) {
		return apartmentRepository.findById(id);
	}
}
