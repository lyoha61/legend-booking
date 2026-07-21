import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "@/routes/search/page";
import { GuestLayout } from "@/layouts/GuestLayout";
import { ApartmentPage } from "@/routes/apartments/page";
import { RegisterPage } from "@/routes/register/page";
import { LoginPage } from "@/routes/login/page";
import { ProtectedRoute } from "@/app/router/ProtectedRoute";
import { DashboardPage } from "@/routes/owner";
import { OwnerLayout } from "@/layouts/OwnerLayout";
import { ApartmentsPage } from "@/routes/owner/objects/page";
import { CreateApartmentPage } from "@/routes/owner/objects/create/page";
import { RoleProtectedRoute } from "./RoleProtectedRoute";
import { CheckoutPage } from "@/routes/checkout/page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/register" replace />
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
	},
	{
		path: "/owner",
		element: (
			<RoleProtectedRoute role="OWNER">
				<OwnerLayout />
			</RoleProtectedRoute>
		),
		children: [
			{ path: "dashboard", element: <DashboardPage /> },
			{
				path: "apartments",
				children: [
					{ index: true, element: <ApartmentsPage /> },
					{ path: "create", element: <CreateApartmentPage /> }
				]
			}
		]
	},
	{
		path: "/checkout",
		element: (
			<CheckoutPage />
		)
	}
]);
