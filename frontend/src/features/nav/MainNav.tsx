import {
  Calendar,
  History,
  Heart,
  HelpCircle,
  User,
  Bell,
  ChevronDown,
} from "lucide-react";

export function MainNav() {
	return (
		<div className="flex flex-1 items-center justify-between">
			<div className="flex items-center gap-1">
				<button className="btn-nav-main">
					<Calendar className="size-4" />
					<span>Мои бронирования</span>
				</button>

				<button className="btn-nav-main">
					<Heart className="size-4" />
					<span>Сохраненные</span>
				</button>

				<button className="btn-nav-main">
					<HelpCircle className="size-4" />
					<span>Поддержка</span>
				</button>

				<button className="btn-nav-main">
					<User className="size-4" />
					<span>Профиль</span>
				</button>
			</div>

			<span className="items-center justify-center text-gray-700 rounded-md border px-2 py-0.5 text-xs font-medium">
				Гостевой режим
			</span>
		</div>
	);
}
