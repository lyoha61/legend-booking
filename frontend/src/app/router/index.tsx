import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "@/routes/search/page";
import { GuestLayout } from "@/layouts/GuestLayout";
import { ApartmentPage } from "@/routes/apartments/page";
import { RegisterPage } from "@/routes/register/page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/search" replace />
	},
	{
		path: "/search",
		element: (
			<GuestLayout>
				<SearchPage />
			</GuestLayout>
		)
	},
	{
		path: "/apartments/:id",
		element: (
			<GuestLayout>
				<ApartmentPage />
			</GuestLayout>
		)
	},
	{
		path: "/register",
		element: (
			<RegisterPage />
		)
	}
]);
