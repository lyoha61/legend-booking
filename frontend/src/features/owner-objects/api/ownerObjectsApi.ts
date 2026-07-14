import { apiClient } from "@/shared/api/client"
import type { CreateApartmentRequest } from "./types";

export const getOwnerApartments = async () => {
	const res = await apiClient.get("/apartments/owner");
	return res;
}

export const createApartment = async (data: CreateApartmentRequest) => {
	const res = await apiClient.post("/apartments", data);
	return res;
}
