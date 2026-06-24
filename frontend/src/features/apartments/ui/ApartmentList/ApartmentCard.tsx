import { Users, Maximize2, Eye } from "lucide-react";
import { ImageOff } from 'lucide-react';
import { useEffect, useState } from "react";

type ApartmentCardProps = {
	id: string,
	name: string,
	floor: number,
	building: string,
	maxGuests: number,
	pricePerNight: number,
	imageUrl: string,
	badges?: string[],
	areaSqm?: number,
	onDetailsClick: (id: string) => void,
}


export const ApartmentCard = ({
	id,
	name,
	floor,
	building,
	maxGuests,
	pricePerNight,
	imageUrl,
	badges,
	areaSqm,
	onDetailsClick
}: ApartmentCardProps) => {
	const [imageError, setImageError] = useState(false);
	const showFallback = !imageUrl || imageError;

	return (
		<div className="bg-white rounded-xl border gap-6 overflow-hidden hover:shadow-lg transition-shadow duration-200 border-gray-200">
			<div className="h-48 overflow-hidden bg-gray-100">
				{showFallback ? (
						<div className="flex flex-col gap-3 text-gray-500 justify-center items-center w-full h-full ">
							<ImageOff />
							<span>Нет изображения</span>
						</div>
					) : (
						<img
							src={imageUrl}
							alt={name}
							className="w-full h-full object-cover"
							onError={() => setImageError(true)}
						/>
					)
				}
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
						<span>{maxGuests} гостей</span>
					</div>
					{areaSqm && (
						<div className="flex items-center gap-1.5">
							<Maximize2 className="size-4" />
							<span>{areaSqm} m²</span>
						</div>
					)}
				</div>

				<div className="flex items-center justify-between pt-2 border-t border-gray-100">
					<div>
						<div className="flex gap-0.5 text-2xl tracking-tight text-gray-900">
							<span>₽</span>
							<span>{pricePerNight}</span>
						</div>
						<div className="text-xs text-gray-500">
							за ночь
						</div>
					</div>
					<button
						className="inline-flex items-center cursor-pointer gap-2 rounded-md text-sm font-medium px-4 py-2  justify-center bg-gray-900 hover:bg-gray-800 text-white"
						onClick={() => onDetailsClick(id)}
					>
						Подробнее
					</button>
				</div>
			</div>
		</div>
	)
}
