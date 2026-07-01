import { useEffect, useRef } from "react";
import { useAuthStore } from "./authStore"
import { refresh } from "../api/authApi";

export const useAuthInit = () => {
	const initialized = useRef(false);
	const setAccessToken = useAuthStore(state => state.setAccessToken);

	const setLoading = useAuthStore(state => state.setLoading);

	useEffect(() => {
		if (initialized.current) return;

		initialized.current = true;

		const init = async () => {
			try {
				const data = await refresh();

				setAccessToken(data.accessToken);
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
