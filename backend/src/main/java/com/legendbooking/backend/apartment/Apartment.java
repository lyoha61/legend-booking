package com.legendbooking.backend.apartment;

import com.legendbooking.backend.owner.Owner;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "apartments")
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

    private String number;

    private Integer floor;

    private String name;

    @Column(name = "area_sqm")
    private BigDecimal areaSqm;

    @Column(name = "max_guests")
    private Integer maxGuests;

    @Column(name = "rooms_count")
    private Integer roomsCount;

    @Column(name = "price_per_night")
    private BigDecimal pricePerNight;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @PrePersist
    private void onCreate() {
   		Instant now = Instant.now();
	    createdAt = now;
	    updatedAt = now;
    }
}
