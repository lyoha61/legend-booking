package com.legendbooking.backend.apartment;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApartmentService {

	private final ApartmentRepository repository;

	public List<Apartment> getAll() {
		return repository.findAll();
	}

	public Optional<Apartment> getById(UUID id) {
		return repository.findById(id);
	}
}
