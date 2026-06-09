import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "@/routes/search/page";
import { GuestLayout } from "@/layouts/GuestLayout";

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
	}
]);
