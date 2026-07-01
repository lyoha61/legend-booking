import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "@/routes/search/page";
import { GuestLayout } from "@/layouts/GuestLayout";
import { ApartmentPage } from "@/routes/apartments/page";
import { RegisterPage } from "@/routes/register/page";
import { LoginPage } from "@/routes/login/page";
import { ProtectedRoute } from "@/app/router/ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/register" replace />
	},
	{
		path: "/search",
		element: (
			<ProtectedRoute>
				<GuestLayout>
					<SearchPage />
				</GuestLayout>
			</ProtectedRoute>
		)
	},
	{
		path: "/apartments/:id",
		element: (
			<ProtectedRoute>
				<GuestLayout>
					<ApartmentPage />
				</GuestLayout>
			</ProtectedRoute>
		)
	},
	{
		path: "/register",
		element: (
			<RegisterPage />
		)
	},
	{
		path: "/login",
		element: (
			<LoginPage />
		)
	}
]);
