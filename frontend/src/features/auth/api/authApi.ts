import { apiClient } from "@/shared/api/client"
import { useAuthStore } from "../model/authStore";

interface authRequest {
	email: string,
	password: string,
}

export const register = async (data: authRequest) => {
	const res = await apiClient.post("/auth/register", data);
	return res
}

export const login = async (data: authRequest) => {
	const res = await apiClient.post("/auth/login", data);
	return res
}

let refreshPromise: Promise<void> | null = null;

export const refresh = async () => {
	if (!refreshPromise) {
		refreshPromise = apiClient.post("/auth/refresh")
			.then((data ) => {
				useAuthStore
					.getState()
					.setAccessToken(data.accessToken);
			})
			.finally(() => {
				refreshPromise = null;
			});
	}

	return refreshPromise;
}
