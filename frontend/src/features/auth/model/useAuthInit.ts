import { useEffect } from "react";
import { useAuthStore } from "./authStore"
import { me, refresh } from "../api/authApi";

export const useAuthInit = () => {
	const setAccessToken = useAuthStore(state => state.setAccessToken);
	const setLoading = useAuthStore(state => state.setLoading);
	const setUser = useAuthStore(state => state.setUser);

	useEffect(() => {
		const init = async () => {
			try {
				await refresh();

				const user = await me();
				setUser(user);
			} catch (err) {
				console.error(err);
				useAuthStore.getState().logout();
			} finally {
				setLoading(false)
			}
		}

		init();
	}, [setAccessToken, setLoading]);
}
