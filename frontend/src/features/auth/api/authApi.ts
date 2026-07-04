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

export const refresh = async (isRetryAllowed = true) => {
	console.log("Refreshing token");
	console.log("refreshPromise: ", refreshPromise);
	if (!refreshPromise) {
		refreshPromise = apiClient.post("/auth/refresh", {}, isRetryAllowed)
			.then((data) => {
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

export const me = async () => {
	const res = await apiClient.get("/auth/me");
	return res;
}

export const logout = async () => {
	const res = await apiClient.post("/auth/logout");
	return res;
}
