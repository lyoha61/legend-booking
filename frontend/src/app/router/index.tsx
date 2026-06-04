import { createBrowserRouter, Navigate } from "react-router";
import { SearchPage } from "../../routes/search/page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/search" replace />
	},
	{
		path: "/search",
		element: <SearchPage />
	}
]);
