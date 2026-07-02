import { useEffect } from "react";
import { useAuthStore } from "./authStore"
import { refresh } from "../api/authApi";

export const useAuthInit = () => {
	const setAccessToken = useAuthStore(state => state.setAccessToken);

	const setLoading = useAuthStore(state => state.setLoading);

	useEffect(() => {
		const init = async () => {
			try {
				await refresh();
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
