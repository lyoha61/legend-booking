package com.legendbooking.backend.auth.dto;

import java.time.Instant;
import java.util.UUID;

public record ResponseLogin (
	UUID id,
	String email,
	String firstName,
	String lastName,
	String phone,
	Instant created_at,
	Instant updated_at
){}
