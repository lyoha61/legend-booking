import { create } from "zustand";

type SearchDate = string | null;

type SearchState = {
	checkInDate: SearchDate,
	checkOutDate: SearchDate,
	setDates: (checkIn: SearchDate, checkOut: SearchDate) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	checkInDate: null,
	checkOutDate: null,
	setDates: (checkIn, checkOut) => set({ checkInDate: checkIn, checkOutDate: checkOut }),
}))
