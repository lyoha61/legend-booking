import { login, logout, me, register } from "../api/authApi";
import { useAuthStore } from "./authStore";

type AuthData = {
	email: string;
	password: string;
}

export const useAuth = () => {
	const setAccessToken = useAuthStore(state => state.setAccessToken);
	const setUser = useAuthStore(state => state.setUser);
	const clearAuth = useAuthStore(state => state.clearAuth);

	const signIn = async (data: AuthData) => {
		const response = await login(data);

		setAccessToken(response.accessToken);

		const user = await me();
		setUser(user);
	}

	const signUp = async (data: AuthData) => {
		const response = await register(data);

		setAccessToken(response.accessToken);

		const user = await me();
		setUser(user);
	}

	const signOut = async () => {
		await logout();
		setUser(null);
		clearAuth();
	}

	return { signIn, signUp, signOut }
}
