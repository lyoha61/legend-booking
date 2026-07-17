package com.legendbooking.backend.config;

import com.legendbooking.backend.apartment.*;
import com.legendbooking.backend.user.*;

import lombok.RequiredArgsConstructor;

import com.legendbooking.backend.owner.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.Instant;

@Component
@Profile("dev")
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final OwnerRepository ownerRepository;
    private final ApartmentRepository apartmentRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
    	if (userRepository.count() > 0) return;

      UserEntity ivan = new UserEntity();
      ivan.setFirstName("Иван");
      ivan.setLastName("Петров");
      ivan.setEmail("ivan@example.com");
      ivan.setPhone("+79990001111");
      ivan.setPassword(passwordEncoder.encode("12345678"));
      ivan.setRole(Role.OWNER);
      ivan.setCreatedAt(Instant.now());
      ivan.setUpdatedAt(Instant.now());

      UserEntity anna = new UserEntity();
      anna.setFirstName("Анна");
      anna.setLastName("Сидорова");
      anna.setEmail("anna@example.com");
      anna.setPhone("+79990002222");
      anna.setPassword(passwordEncoder.encode("12345678"));
      anna.setRole(Role.OWNER);
      anna.setCreatedAt(Instant.now());
      anna.setUpdatedAt(Instant.now());

      UserEntity manager = new UserEntity();
      manager.setFirstName("Олег");
      manager.setLastName("Менеджер");
      manager.setEmail("manager@legend.ru");
      manager.setPhone("+79990003333");
      manager.setPassword("password123");
      manager.setCreatedAt(Instant.now());
      manager.setUpdatedAt(Instant.now());

      userRepository.save(ivan);
      userRepository.save(anna);
      userRepository.save(manager);

      Owner owner1 = new Owner();
      owner1.setUser(ivan);

      Owner owner2 = new Owner();
      owner2.setUser(anna);

      ownerRepository.save(owner1);
      ownerRepository.save(owner2);

      Apartment studio = new Apartment();
      studio.setOwner(owner1);
      studio.setName("Студия с видом на парк");
      studio.setNumber("45");
      studio.setFloor(5);
      studio.setAreaSqm(new BigDecimal("35.50"));
      studio.setMaxGuests(2);
      studio.setRoomsCount(1);
      studio.setCreatedAt(Instant.now());
      studio.setUpdatedAt(Instant.now());
      studio.setPricePerNight(new BigDecimal("4500.00"));

      Apartment twoRoom = new Apartment();
      twoRoom.setOwner(owner1);
      twoRoom.setName("Двухкомнатная у метро");
      twoRoom.setNumber("12");
      twoRoom.setFloor(3);
      twoRoom.setAreaSqm(new BigDecimal("58.00"));
      twoRoom.setMaxGuests(4);
      twoRoom.setRoomsCount(2);
      twoRoom.setCreatedAt(Instant.now());
      twoRoom.setUpdatedAt(Instant.now());
      twoRoom.setPricePerNight(new BigDecimal("6200.00"));

      Apartment lux = new Apartment();
      lux.setOwner(owner2);
      lux.setName("Люкс с террасой");
      lux.setNumber("100");
      lux.setFloor(12);
      lux.setAreaSqm(new BigDecimal("95.00"));
      lux.setMaxGuests(6);
      lux.setRoomsCount(3);
      lux.setCreatedAt(Instant.now());
      lux.setUpdatedAt(Instant.now());
      lux.setPricePerNight(new BigDecimal("9500.00"));

      apartmentRepository.save(studio);
      apartmentRepository.save(twoRoom);
      apartmentRepository.save(lux);

      System.out.println("✅ Мок-данные загружены!");
    }
}
