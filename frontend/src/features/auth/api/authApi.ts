import { apiClient } from "@/shared/api/client"

interface RegisterRequest {
	email: string,
	password: string,
}

export const register = async (data: RegisterRequest) => {
	const res = await apiClient.post("/auth/register", data);
	return res
}
