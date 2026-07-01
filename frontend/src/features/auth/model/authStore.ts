import { create } from "zustand";

type AuthState = {
	accessToken: string | null,
	isLoading: boolean,

	setLoading: (value: boolean) => void;
	setAccessToken: (value: string | null) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	accessToken: null,
	isLoading: true,

	setAccessToken: (token) =>
		set({
				accessToken: token
			}),

	setLoading: (value) =>
		set({
			isLoading: value
		}),

	logout: () =>
		set({
			accessToken: null
		})
}))
