import { useAuthInit } from "@/features/auth/model/useAuthInit"

export const AuthProvider = ({
	children
}: {
	children: React.ReactNode
	}) => {
	useAuthInit();
	return children;
}
