import { useAuthStore } from "@/features/auth/model/authStore";
import type { ApiError } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
	private async request(path: string, options: RequestInit = {}) {
		const token = useAuthStore.getState().accessToken;

		const headers = new Headers({
			"Content-Type": "application/json",
			...options.headers,
		});

		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}

		const res = await fetch(`${API_BASE_URL}${path}`, {
			...options,
			headers,
			credentials: "include"
		});

		if (!res.ok) {
			const error: ApiError = await res.json();
			throw error;
		}
		return res.json();
	}

	get(path: string) {
		return this.request(path, {
			method: "GET"
		});
	}

	post(path: string, body?: unknown) {
		return this.request(path, {
			method: "POST",
			body: JSON.stringify(body),
		});
	}

	delete(path: string) {
		return this.request(path, {
			method: "DELETE"
		});
	}
}

export const apiClient = new ApiClient();
