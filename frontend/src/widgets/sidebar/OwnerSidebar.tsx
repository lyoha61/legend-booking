import { LayoutDashboard, Building, Building2 } from 'lucide-react';
import path from 'node:path/win32';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OwnerSidebar = () => {
	const [activeTab, setActiveTab] = useState("dashboard");
	const navigate = useNavigate();

	const menuItems = [
		{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "dashboard"},
		{ id: "apartments", label: "Мои объекты", icon: Building, path: "apartments" },
	]

	const handleClick = (item) => {
		setActiveTab(item.id);
		navigate(item.path)
	}

	return (
		<div className="h-full px-3 py-4 bg-white rounded-xl shadow-lg">
			<div
				className="flex items-center gap-3 mb-10 cursor-pointer"
				onClick={() => navigate("/search")}
			>
				<Building2 className="size-6 text-teal-700" />
				<h1 className="tracking-tight bg-linear-to-r from-[#0F766E] to-[#14B8A6] bg-clip-text text-transparent text-[18px]">
					Legend Booking
				</h1>
			</div>
			<ul className="flex flex-col gap-2">
				{menuItems.map(item => (
						<li
							key={item.id}
							className={`tab ${activeTab === item.id ? "tab-active" : ""}`}
							onClick={() => handleClick(item)}
						>
							<item.icon className="size-4" />
							<span>{item.label}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
