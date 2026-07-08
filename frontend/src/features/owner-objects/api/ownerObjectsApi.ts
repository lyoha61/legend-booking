import { apiClient } from "@/shared/api/client"

export const getOwnerApartments = async () => {
	const res = await apiClient.get("/apartments/owner");
	return res;
}
