import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { AuthProvider } from "./AuthProvide";

export function AppRouter() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	)
}
