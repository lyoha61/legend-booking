const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchApi = (path: string, options: RequestInit = {}) => {
	return fetch(`${API_BASE_URL}${path}`, {
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
		...options
	})
}
