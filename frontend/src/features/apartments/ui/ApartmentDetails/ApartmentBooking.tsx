import { useSearchStore } from "@/shared/store/useSearchStore";
import { formatDate } from "@/utils/date";
import { useState, useEffect, useMemo } from "react";
import { differenceInDays } from "date-fns";

type ApartmentBookingProps = {
	pricePerNight: number;
}

export const ApartmentBooking = ({ pricePerNight }: ApartmentBookingProps) => {
	const [price, setPrice] = useState(pricePerNight);
	const checkInDate = useSearchStore((state) => state.checkInDate);
	const checkOutDate = useSearchStore((state) => state.checkOutDate);
	console.log(price)
	const calculateNights = (checkIn: string | null, checkOut: string | null): number => {
	  if (!checkIn || !checkOut) return 0;

	  const checkInDateObj = new Date(checkIn);
	  const checkOutDateObj = new Date(checkOut);

	  if (isNaN(checkInDateObj.getTime()) || isNaN(checkOutDateObj.getTime())) {
	    return 0;
	  }

	  const diffInDays = differenceInDays(checkOutDateObj, checkInDateObj);

	  return diffInDays > 0 ? diffInDays : 0;
	}

  const countNight = useMemo(() => calculateNights(checkInDate, checkOutDate), [checkInDate, checkOutDate]);

  const totalPrice = useMemo(() => price * countNight, [price, countNight]);


	return (
		<div className="bg-white border border-gray-200 shadow-lg py-7 px-6 rounded-xl">
			<div className="flex items-end gap-2 mb-4">
				<h2 className="text-3xl">₽{price}</h2>
				<span className="text-sm text-gray-500 pb-1.5">/ ночь</span>
			</div>

			<div className="grid grid-cols-[1fr_auto_1fr] border border-gray-200 min-h-12.5 rounded-lg">
				<div className="flex w-full flex-col px-3 py-4">
					<span className="text-gray-500 text-xs uppercase tracking-tight">Заезд</span>
					<span className="font-semibold">{formatDate(checkInDate)}</span>
				</div>

				<div className="w-px bg-gray-200 self-stretch" />

				<div className="flex flex-col w-full px-3 py-4">
					<span className="text-gray-500 text-xs uppercase tracking-tight">Выезд</span>
					<span className="font-semibold">{formatDate(checkOutDate)}</span>
				</div>
			</div>

			<div
				className="flex justify-between px-3 py-4 border border-gray-200 rounded-lg mt-4 mb-5"
			>
				<span className="font-semibold">Гости</span>
				<span className="text-gray-500 font-light">2 гостя</span>
			</div>

			<div className="flex flex-col gap-3 border-t border-b border-gray-200 py-4">
				<div className="flex justify-between">
					<span className="text-gray-600 font-light">₽{price} × {countNight} ночи</span>
					<span className="text-gray-900">₽{ totalPrice }</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-600 font-light">Услуга</span>
					<span className="text-gray-900 ">Включено</span>
				</div>
				<div className="flex justify-between">
					<span className="text-mauve-600 font-light">Услуга</span>
					<span className="text-gray-900 ">Включено</span>
				</div>
			</div>

			<div className="flex justify-between py-4 font-semibold text-xl">
				<span>Итого</span>
				<span>₽{ totalPrice }</span>
			</div>

			<button className="flex justify-center py-3 items-center bg-teal-700 text-white w-full rounded-lg shadow-lg font-semibold cursor-pointer">
				Забронировать
			</button>

			<div className="flex w-full justify-center items-center mt-3">
				<p className="text-sm text-gray-500 font-light">Оплата не требуется сейчас</p>
			</div>
		</div>
	);
}
