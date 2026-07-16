package com.legendbooking.backend.apartment;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legendbooking.backend.apartment.dto.CreateApartmentRequest;
import com.legendbooking.backend.user.UserEntity;

import jakarta.validation.Valid;
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

	@PostMapping
	public ResponseEntity<?> create(
		@AuthenticationPrincipal UserEntity user,
		@Valid @RequestBody CreateApartmentRequest data
	) {
		return ResponseEntity
			.status(HttpStatus.CREATED)
			.body(apartmentService.createApartment(data, user.getId()));
	}

	@GetMapping("/owner")
	public ResponseEntity<?> getOwnerApartments(
		@AuthenticationPrincipal UserEntity user
	) {
		List<Apartment> apartments = apartmentService.getOwnerApartments(user.getId());
		return ResponseEntity.ok().body(apartments);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Apartment> getById(@PathVariable UUID id) {
		Optional<Apartment> apartment = apartmentService.getById(id);

		return apartment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}
}
