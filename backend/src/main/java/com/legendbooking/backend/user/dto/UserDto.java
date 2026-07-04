package com.legendbooking.backend.user.dto;

import java.time.Instant;
import java.util.UUID;

import com.legendbooking.backend.user.Role;

public record UserDto(
    UUID id,
    String firstName,
    String lastName,
    String email,
    String phone,
    Role role,
    Instant createdAt,
    Instant updatedAt
) {}
