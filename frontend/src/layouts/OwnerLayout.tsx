import { OwnerSidebar } from "@/widgets/sidebar/OwnerSidebar"
import { Outlet } from "react-router-dom"

export const OwnerLayout = () => {
	return (
		<div className="h-full p-2 grid grid-cols-[1fr_6fr]">
			<OwnerSidebar />
			<div className="px-6">
				<Outlet />
			</div>
		</div>
	)
}
