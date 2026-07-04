import { useAuthStore } from "@/features/auth/model/authStore";
import type { ApiError } from "./types";
import { refresh } from "@/features/auth/api/authApi";

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
	private async request(path: string, options: RequestInit = {}, isRetryAllowed = true): Promise<unknown> {
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

		if (res.status === 401 && isRetryAllowed) {
			await refresh(false);

			return this.request(path, options, false);
		}

		if (!res.ok) {
			const error: ApiError = await res.json();
			throw error;
		}

		if (res.status === 204)
			return null;

		return res.json();
	}

	get(path: string) {
		return this.request(path, {
			method: "GET"
		});
	}

	post(path: string, body?: unknown, isRetryAllowed = true) {
		return this.request(path, {
			method: "POST",
			body: JSON.stringify(body),
		}, isRetryAllowed);
	}

	delete(path: string) {
		return this.request(path, {
			method: "DELETE"
		});
	}
}

export const apiClient = new ApiClient();
