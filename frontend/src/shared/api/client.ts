import type { ApiError } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
	private async request(path: string, options: RequestInit = {}) {
		const res = await fetch(`${API_BASE_URL}${path}`, {
			headers: {
				"Content-Type": "application/json",
				...options.headers,
			},
			...options
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

	post(path: string, body: unknown) {
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
