import { fetchApi } from "@/shared/api/client"
import type { Apartment } from "../model/types";

export const getApartments = async (): Promise<Apartment[]> => {
	const res = await fetchApi("/apartments");
	if (!res.ok) throw new Error("Failed to fetch apartments");
	return res.json();
}
