package com.legendbooking.backend.booking;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.legendbooking.backend.apartment.Apartment;
import com.legendbooking.backend.apartment.ApartmentRepository;
import com.legendbooking.backend.apartment.dto.CreateApartmentRequest;
import com.legendbooking.backend.booking.dto.CreateBookingRequest;
import com.legendbooking.backend.exception.ApartmentNotFoundException;
import com.legendbooking.backend.exception.UserNotFoundException;
import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingService {
	private final BookingRepository bookingRepository;
	private final UserRepository userRepository;
	private final ApartmentRepository apartmentRepository;

	public BookingEntity create(
		UUID userId, 
		CreateBookingRequest data
	) {
		UserEntity user = userRepository.findById(userId).orElseThrow(
			() -> new UserNotFoundException()
		);
		Apartment apartment = apartmentRepository.findById(data.apartmentId()).orElseThrow(
			() -> new ApartmentNotFoundException()
		);
		
		BookingEntity bookingEntity = new BookingEntity(user, apartment, data);

		return bookingRepository.save(bookingEntity);
	}
}
