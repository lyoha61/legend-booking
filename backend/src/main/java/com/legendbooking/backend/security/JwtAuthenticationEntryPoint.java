package com.legendbooking.backend.security;

import java.io.IOException;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
	private final JwtErrorResponseWriter jwtErrorResponseWriter;

	@Override
	public void commence (
		HttpServletRequest request,
		HttpServletResponse response,
		AuthenticationException authException
	) throws ServletException, IOException  {
		jwtErrorResponseWriter.write(
			request,
			response,
			"UNAUTHORIZED",
			"Authentication required"
		);
	}

}
