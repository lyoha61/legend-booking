import { LogOut, Calendar, Heart, LayoutDashboard } from 'lucide-react';

export const getProfileMenuItems = (user, logout, navigate) => {
	if (!user) return [];
	console.log(user);
  const base = [
		{
			icon: Calendar,
      label: "Мои бронирования",
      onClick: () => console.log("Мои бронирования"),
		},
		{
			label: "Сохраненные",
			icon: Heart,
    },
		{
			icon: LogOut,
      label: "Выйти",
      onClick: () => logout(),
      danger: true,
		},
  ];

  if (user.role === "OWNER") {
    base.splice(1, 0, {
			label: "Панель управления",
      icon: LayoutDashboard,
      onClick: () => navigate("/owner/dashboard"),
    });
  }

  return base;
};
