import { apiClient } from "@/shared/api/client"
import type { Apartment } from "../model/types";

export const getApartments = async (): Promise<Apartment[]> => {
	const res = await apiClient.get("/apartments");
	return res;
}

export const getApartment = async (id: string): Promise<Apartment> => {
	const res = await apiClient.get(`/apartments/${id}`);
	return res;
}
