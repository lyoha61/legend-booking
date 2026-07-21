import { apiClient } from "@/shared/api/client"

export const createBooking = async (data) => {
	const res = await apiClient.post("/bookings", data);
	return res;
}