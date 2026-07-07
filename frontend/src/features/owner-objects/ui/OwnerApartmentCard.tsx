import { MapPin, Eye, Pencil, Calendar } from 'lucide-react';

export type OwnerApartmentCardProps = {
	img: string,
	name: string,
	address: string,
	occupancy: number,
	revenueMonth: number,
	nextBooking: Date,
	roomsCount: number,
	status: "active" | "paused"
}

export const OwnerApartmentCard = ({
	img,
	name,
	address,
	occupancy,
	revenueMonth,
	nextBooking,
	roomsCount,
	status
}: OwnerApartmentCardProps) => {

	const cardActions = [
		{ label: "Предосмотр", icon: Eye },
		{ label: "Изменить", icon: Pencil },
		{ label: "Календарь", icon: Calendar }
	]

	const occupancyStyles = {
		good: {
			bg: "#00BD7D",
			text: "#00D492",
		},
		normal: {
			bg: "#FFBA00",
			text: "#FFBA00",
		},
		low: {
			bg: "#FB2C37",
			text: "#FF6467",
		}
	};

	const getStyle = (occupancy: number) => {
		if (occupancy >= 75) {
			return occupancyStyles.good;
		}
		else if (occupancy >= 50 && occupancy < 75) {
			return occupancyStyles.normal;
		}
		else {
			return occupancyStyles.low;
		}
	}

	const occupancyCurrentStyle = getStyle(occupancy);

	return (
		<div className='h-auto md:h-[470px] rounded-xl overflow-hidden shadow-sm'>
			<div className='relative h-2/5 overflow-hidden'>
				<div className='absolute left-3 top-2'>
					{status === "active" ? (
						<div className='flex items-center gap-1.5 rounded-full  bg-black/30 border border-emerald-500/30 px-2.5 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm'>
							<span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
							<span className=''>Активный</span>
						</div>
					) : (
						<span className="flex items-center gap-1.5 rounded-full bg-black/30 border border-amber-500/30 px-2.5 py-1 text-xs font-medium text-amber-400 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-amber-400" />
              Заморожен
            </span>
					)}
				</div>

				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

				<img src={img} className='h-full w-full object-cover' />
			</div>
			<div className='p-2 md:p-4'>
				<div>
					<span className='font-semibold'>{name}</span>
					<div className='flex items-center gap-1 text-gray-500'>
						<MapPin className='size-4' />
						<span>{address}</span>
					</div>
				</div>

				<div className='flex flex-col gap-1 mt-5 mb-4'>
					<div className='flex justify-between'>
						<span className='text-gray-500'>Окупаемость</span>
						<span style={{ color: occupancyCurrentStyle.text }}>{occupancy}%</span>
					</div>
					<div className='w-full h-1.5 rounded-full bg-gray-200'>
						<div
							style={{
								width: `${occupancy}%`,
        				backgroundColor: occupancyCurrentStyle.bg,
							}}
							className={'h-full rounded-full'}
						/>
					</div>
				</div>

				<div className='grid grid-cols-2 gap-3'>
					<div className='flex flex-col bg-gray-100/50 border border-gray-200 rounded-2xl justify-center gap-1 px-4 py-2'>
						<span className='text-gray-700 text-sm'>
							Доход в месяц
						</span>
						<span className='text-black'>{revenueMonth} ₽</span>
					</div>

					<div className='flex flex-col  bg-gray-100/50 border border-gray-200  rounded-2xl justify-center gap-1 px-4 py-2'>
						<span className='text-gray-700 text-sm'>
							Следующая бронь
						</span>
						<span>-</span>
					</div>
				</div>

				<div className='w-full h-0.5 bg-gray-200 mt-5' />

				<ul className='mt-4 flex gap-4 pl-2'>
					{cardActions.map(action => (
							<li className='flex items-center gap-1 text-sm text-gray-600 cursor-pointer'>
								<action.icon className='size-4' />
								<span>{action.label}</span>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
