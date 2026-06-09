import { MainNav } from "@/features/nav/MainNav";
import { Building2 } from "lucide-react";

export function GuestHeader() {
	return (
		<div className="bg-white border-b border-gray-200 top-0 z-50 px-6 py-4">
			<div className="flex items-center gap-3"	>
				<Building2 className="size-10 text-gray-900" />
				<div className="flex flex-col">
					<h1 className="tracking-tight text-gray-900">
						Legend Booking
					</h1>
					<span className="text-xs text-gray-500">
						Система управления недвижимостью
					</span>
				</div>

				<div className="h-10 w-px bg-gray-200" />

				<MainNav />
			</div>
		</div>
	);
}
