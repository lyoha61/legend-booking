import { Users, Maximize2, Eye } from "lucide-react";

type ApartmentCardProps = {
	id: string,
	name: string,
	floor: number,
	building: string,
	capacity: number,
	price: number,
	imageUrl: string,
	badges?: string[],
	size?: number,
}


export const ApartmentCard = ({
	name,
	floor,
	building,
	capacity,
	price,
	imageUrl,
	badges,
	size
}: ApartmentCardProps) => {

	return (
		<div className="bg-white rounded-xl border gap-6 overflow-hidden hover:shadow-lg transition-shadow duration-200 border-gray-200">
			<div className="h-48 overflow-hidden bg-gray-100">
				<img
					src={imageUrl}
					alt={name}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-5 space-y-4">
				<div>
					<h3 className="text-gray-900 tracking-tight">{name}</h3>
					<p className="text-sm text-gray-500">
						{building} • Этаж {floor}
					</p>
				</div>

				<div className="flex items-center gap-4 text-sm text-gray-600">
					<div className="flex items-center gap-1.5">
						<Users className="size-4" />
						<span>{capacity} гостей</span>
					</div>
					{size && (
						<div className="flex items-center gap-1.5">
							<Maximize2 className="size-4" />
							<span>{size} m²</span>
						</div>
					)}
				</div>

				<div className="flex items-center justify-between pt-2 border-t border-gray-100">
					<div>
						<div className="text-2xl tracking-tight text-gray-900">
							₽{price}
						</div>
						<div className="text-xs text-gray-500">
							за ночь
						</div>
					</div>
					<button
						className="inline-flex items-center cursor-pointer gap-2 rounded-md text-sm font-medium px-4 py-2  justify-center bg-gray-900 hover:bg-gray-800 text-white"
					>
						Подробнее
					</button>
				</div>
			</div>
		</div>
	)
}
