package com.legendbooking.backend.booking;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.legendbooking.backend.apartment.Apartment;
import com.legendbooking.backend.booking.dto.CreateBookingRequest;
import com.legendbooking.backend.user.UserEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "bookings")
@Getter
@Setter
public class BookingEntity {

	@Id
	@GeneratedValue
	UUID id;

	@ManyToOne
	@JoinColumn(nullable = false, name = "user_id")
	UserEntity user;

	@ManyToOne
	@JoinColumn(nullable = false, name = "apartment_id")
	Apartment apartment;

	LocalDate checkIn;

	LocalDate checkOut;

	Integer guests;

	@Enumerated(EnumType.STRING)
	@JdbcTypeCode(SqlTypes.NAMED_ENUM)
	BookingStatus status;

	Instant createdAt;

	Instant updatedAt;

	protected BookingEntity() {}

	public BookingEntity (
		UserEntity user,
		Apartment apartment,
		CreateBookingRequest data
	) {
		this.user = user;
		this.apartment = apartment;
		this.checkIn = data.checkIn();
		this.checkOut = data.checkOut();
		this.guests = data.guests();
		this.status = BookingStatus.PENDING;
	}
}
