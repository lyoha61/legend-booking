import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "@/routes/search/page";
import { GuestLayout } from "@/layouts/GuestLayout";
import { ApartmentPage } from "@/routes/apartments/page";
import { RegisterPage } from "@/routes/register/page";
import { LoginPage } from "@/routes/login/page";
import { ProtectedRoute } from "@/app/router/ProtectedRoute";
import { DashboardPage } from "@/routes/owner";
import { OwnerLayout } from "@/layouts/OwnerLayout";
import { ObjectsPage } from "@/routes/owner/objects/page";

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
		element: <OwnerLayout />,
		children: [
			{ index: true, path: "dashboard", element: <DashboardPage /> },
			{ path: "objects", element: <ObjectsPage /> }
		]
	}
]);
