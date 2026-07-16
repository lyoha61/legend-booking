import { useAuthStore } from "@/features/auth/model/authStore";
import { Navigate } from "react-router-dom";

export const RoleProtectedRoute = ({
	children,
	role
}: {
	children: React.ReactNode;
	role: "OWNER" | "ADMIN" | "CLIENT";
}) => {
	const user = useAuthStore(state => state.user);
	const isLoading = useAuthStore(state => state.isLoading);

	if (isLoading) {
		return null;
	}

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	if (user.role !== role) {
		return <Navigate to="/" replace />;
	}

	return children;
};
