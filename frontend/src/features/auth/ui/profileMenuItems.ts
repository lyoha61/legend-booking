import { LogOut, Calendar, Heart } from 'lucide-react';

export const getProfileMenuItems = (user, logout) => {
	if (!user) return [];

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
      label: "Мои объекты",
      onClick: () => console.log("properties"),
    });
  }

  return base;
};
