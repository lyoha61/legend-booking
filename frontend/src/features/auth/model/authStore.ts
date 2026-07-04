import { create } from "zustand";

type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	role: "CLIENT" | "OWNER" | "ADMIN";
	createdAt: string;
	updatedAt: string;
};


type AuthState = {
	accessToken: string | null,
	user: User | null,
	isLoading: boolean,

	setUser: (user: User | null) => void;
	setLoading: (value: boolean) => void;
	setAccessToken: (value: string | null) => void;
	clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	accessToken: null,
	isLoading: true,
	user: null,

	setUser: (user) =>
		set({
			user: user
		}),

	setAccessToken: (token) =>
		set({
				accessToken: token
			}),

	setLoading: (value) =>
		set({
			isLoading: value
		}),

	clearAuth: () =>
		set({
			accessToken: null,
			user: null,
		})
}))
