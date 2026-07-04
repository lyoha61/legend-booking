package com.legendbooking.backend.user.mapper;

import org.mapstruct.Mapper;

import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.dto.UserDto;

@Mapper(componentModel = "spring")
public interface UserMapper {
	UserDto toDto(UserEntity user);
}
