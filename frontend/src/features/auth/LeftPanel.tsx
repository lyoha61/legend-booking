import {
  Search,
  Zap,
  Shield,
  Building2,
} from "lucide-react";

export const LeftPanel = ({ className }: {className?: string}) => {

	const benefits = [
  	{ icon: Search, text: "Найдите идеальную квартиру" },
    { icon: Zap, text: "Быстрое онлайн-бронирование" },
    { icon: Shield, text: "Безопасное хранение данных" },
  ];

	return (
		<div className={`relative w-full h-56 sm:h-full bg-slate-800 ${className}`}>
			<img
				src="/background-auth.avif"
				className="absolute w-full h-full inset-0 object-cover object-center"
				alt="Современный интерьер квартиры Legend Booking"
			/>

			<div className="absolute inset-0 bg-linear-to-b from-[#0F172A]/80 via-[#0F172A]/50 to-teal-700/70" />

			<div className="relative h-full flex flex-col justify-between text-white p-8 md:p-10 md:py-12">
				<div className="flex items-center gap-2">
					<div
						className="w-9 h-9 flex items-center justify-center shadow-lg rounded-xl p-2 bg-teal-700"
					>
						<Building2 className=" w-5 h-5 " />
					</div>
					<span className="text-lg font-bold tracking-tight">Legend Booking</span>
				</div>

				<div className="hidden sm:flex flex-col gap-8">
					<div className="flex flex-col">
						<h1
							className="text-4xl font-extrabold leading-tight"
						>
							Добро пожаловать
							<br />в Legend Booking
						</h1>
						<p
							className="text-blue-100/80 text-base leading-relaxed max-w-xs"
						>
							Платформа для управления и бронирования квартир в жилом комплексе
						</p>

					</div>

				  <ul className="flex flex-col gap-3.5">
		        {benefits.map(({ icon: Icon, text }) => (
		          <li key={text} className="flex items-center gap-3">
		            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
		              <Icon className="w-4 h-4 text-teal-300" />
		            </div>
		            <span className="text-white/90 text-sm font-medium">{text}</span>
		          </li>
		        ))}
					</ul>


					<div className="flex items-center gap-2 pt-2">
					  <div className="flex -space-x-2">
					    {["https://i.pravatar.cc/32?img=11", "https://i.pravatar.cc/32?img=22", "https://i.pravatar.cc/32?img=33"].map(
					      (src, i) => (
					        <img
					          key={i}
					          src={src}
					          alt="Пользователь"
					          className="w-8 h-8 rounded-full border-2 border-white/30 object-cover"
					        />
					      )
					    )}
					  </div>
					  <p className="text-white/70 text-xs">
					    <span className="text-white font-semibold">2 400+</span> жильцов уже используют платформу
					  </p>
					</div>
				</div>

				<p className="hidden sm:block text-white/80 text-xs">
	       	© 2026 Legend Booking. Все права защищены.
	      </p>
			</div>
		</div>
	)
}
