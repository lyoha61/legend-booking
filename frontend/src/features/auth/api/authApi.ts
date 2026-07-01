import { apiClient } from "@/shared/api/client"

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

export const refresh = async () => {
	const res = await apiClient.post("/auth/refresh");
	return res
}
