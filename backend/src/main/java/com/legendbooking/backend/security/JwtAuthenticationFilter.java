package com.legendbooking.backend.security;

import java.io.IOException;
import java.util.Collections;
import java.util.UUID;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.legendbooking.backend.user.UserEntity;
import com.legendbooking.backend.user.UserRepository;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	private final JwtService jwtService;
	private final UserRepository userRepository;
	private final ObjectMapper objectMapper;
	private final JwtErrorResponseWriter jwtErrorResponseWriter;


	@Override
	protected void doFilterInternal (
		HttpServletRequest request,
		HttpServletResponse response,
		FilterChain filterChain
	) throws ServletException, IOException {
		try {
			String authHeader = request.getHeader("Authorization");

			if (authHeader == null || !authHeader.startsWith("Bearer ")) {
				filterChain.doFilter(request, response);
				return;
			}

			String token = authHeader.substring(7);
			UUID userId = jwtService.extractUserId(token);

			UserEntity user = userRepository.findById(userId).orElse(null);

			if (user != null) {
				UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
					user,
					null,
					Collections.emptyList()
				);

				SecurityContextHolder
					.getContext()
					.setAuthentication(authenticationToken);
			}

			filterChain.doFilter(request, response);
		} catch (ExpiredJwtException e) {
			jwtErrorResponseWriter.write(
				request,
				response,
				"TOKEN_EXPIRED",
				"Access token expired"
			);

			return;
		}

	}
}
