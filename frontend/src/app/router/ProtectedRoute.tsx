import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/model/authStore"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const accessToken = useAuthStore(
		state => state.accessToken
	);
	const user = useAuthStore(state => state.user);

	const isLoading = useAuthStore(
		state => state.isLoading
	);

	if (isLoading) {
			return null;
		}

	if (!accessToken) {
		return <Navigate to="/login" replace />;
	}

	return children;
}
