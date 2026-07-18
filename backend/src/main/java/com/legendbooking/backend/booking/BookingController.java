package com.legendbooking.backend.booking;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.legendbooking.backend.booking.dto.CreateBookingRequest;
import com.legendbooking.backend.user.UserEntity;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

	private final BookingService bookingService;

	@PostMapping()
	public ResponseEntity<BookingEntity> create(
		@AuthenticationPrincipal UserEntity user,
		@Valid @RequestBody CreateBookingRequest request
	) {
		BookingEntity bookingEntity = bookingService.create(user.getId(), request);
		return ResponseEntity.ok(bookingEntity);
	}
}