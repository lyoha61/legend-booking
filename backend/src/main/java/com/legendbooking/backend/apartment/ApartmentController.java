package com.legendbooking.backend.apartment;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/apartments")
@RequiredArgsConstructor
public class ApartmentController {
	private final ApartmentService apartmentService;

	@GetMapping
	public List<Apartment> getAll() {
		return apartmentService.getAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Apartment> getById(@PathVariable UUID id) {
		Optional<Apartment> apartment = apartmentService.getById(id);

		return apartment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}
}
