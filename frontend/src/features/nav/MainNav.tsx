import {
  Calendar,
  History,
  Heart,
  HelpCircle,
  User,
  Bell,
  ChevronDown,
} from "lucide-react";
import { useAuthStore } from "../auth/model/authStore";
import { ProfileMenuPopover } from "@/shared/ProfileMenuPopover";
import { getProfileMenuItems } from "../auth/ui/profileMenuItems";
import { useAuth } from "../auth/model/useAuth";
import { useNavigate } from "react-router-dom";

export function MainNav() {
	const user = useAuthStore(state => state.user);
	const navigate = useNavigate();
	const isAuth = !!user;
	const { signOut } = useAuth();
	const items = getProfileMenuItems(user, signOut, navigate);
	return (
		<div className="flex flex-1 items-center justify-between">
			<div className="flex items-center gap-1">

				<button className="btn-nav-main">
					<HelpCircle className="size-4" />
					<span>Поддержка</span>
				</button>

			</div>

			{isAuth ? (
				<ProfileMenuPopover
					icon=<User className="size-4" />
					label={user.firstName + " " + user.lastName}
					options={items}
				/>
			) : (
					<button
						className="btn-nav-main border rounded-3xl px-4 bg-white border-gray-300 hover:bg-gray-50/90"
						onClick={() => navigate("/login")}
					>
					<span>Войти</span>
				</button>
			)}
		</div>
	);
}
