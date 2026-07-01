import { login, register } from "../api/authApi";
import { useAuthStore } from "./authStore";

type AuthData = {
	email: string;
	password: string;
}

export const useAuth = () => {
	const setAccessToken = useAuthStore(state => state.setAccessToken);

	const signIn = async (data: AuthData) => {
		const response = await login(data);

		setAccessToken(response.accessToken)
	}

	const signUp = async (data: AuthData) => {
		const response = await register(data);

		setAccessToken(response.accessToken)
	}

	return { signIn, signUp }
}
