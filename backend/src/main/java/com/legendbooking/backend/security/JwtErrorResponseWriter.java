package com.legendbooking.backend.security;

import java.io.IOException;
import java.time.Instant;

import org.springframework.stereotype.Component;

import com.legendbooking.backend.exception.ErrorResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class JwtErrorResponseWriter {

	private final ObjectMapper objectMapper;

	public void write(
		HttpServletRequest request,
		HttpServletResponse response,
		String code,
		String message
	) throws IOException {
		ErrorResponse error = new ErrorResponse(
	        Instant.now().toString(),
	        401,
	        "Unauthorized",
	        code,
	        message,
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
