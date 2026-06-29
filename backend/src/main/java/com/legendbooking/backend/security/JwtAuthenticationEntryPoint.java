package com.legendbooking.backend.security;

import java.io.IOException;
import java.time.Instant;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.legendbooking.backend.exception.ErrorResponse;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
	private final ObjectMapper objectMapper;

	@Override
	public void commence (
		HttpServletRequest request,
		HttpServletResponse response,
		AuthenticationException authException
	) throws ServletException, IOException  {

		ErrorResponse error = new ErrorResponse(
        Instant.now().toString(),
        401,
        "Unauthorized",
        "Authentication required",
        null,
        request.getRequestURI()
    );

		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

		response.setContentType("application/json");

	 	objectMapper.writeValue(
      response.getWriter(),
      error
    );
	}

}
