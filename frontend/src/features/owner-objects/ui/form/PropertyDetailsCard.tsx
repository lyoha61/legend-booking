import { InputWrapper } from "@/shared/InputWrapper";
import { ApartmentFormCard } from "./ApartmentFormCard"
import { LayoutGrid } from "lucide-react";
import { useField } from "@/shared/hooks/useField";
import { validateApartmentArea } from "../../model/validation";
import { Counter } from "@/shared/ui/Counter";
import { useState } from "react";

export const PropertyDetailsCard = () => {
	const {
		field: area,
	  onChange: setArea,
	  onFocus: areaFocus,
	  onBlur: areaBlur,
	  setError: setAreaError
	} = useField("", validateApartmentArea);

	const [roomsCount, setRoomsCount] = useState(1);
	const [maxGuests, setMaxGuests] = useState(2);

	const inputClass =
		"w-full px-5 py-3 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none rounded-xl bg-white";

	const summary = [
	 	{ label: 'Area', value: area.value ? `${area.value} m²` : '— m²' },
    { label: 'Rooms', value: roomsCount },
    { label: 'Guests', value: `До ${maxGuests}` },
	]

	return (
		<ApartmentFormCard
			title="Информация об объекте"
			description="Основные характеристики квартиры"
			icon={LayoutGrid}
		>
			<div className="flex flex-col gap-5">
				<InputWrapper label="Общая площадь" field={area} suffix="m²" >
					<input
						type="number"
						placeholder="0"
						className={`${inputClass} no-spinner`}
						onChange={(e) => setArea(e.target.value)}
						onFocus={areaFocus}
						onBlur={areaBlur}
					/>
				</InputWrapper>

				<div className="grid grid-cols-2 gap-5">
					<Counter label="Кол-во комнат" value={roomsCount} onChange={(value) => setRoomsCount(value)} />
					<Counter label="Макс. гостей" value={maxGuests} onChange={(value) => setMaxGuests(value)} />
				</div>

				<div className="flex gap-8 px-3 py-4 bg-[#F5F5FA] rounded-xl border border-[#E8E9F2]">
					{summary.map((item, index) => (
						<div key={index} className={`flex-1 text-center items-center justify-center ${ index < 2 ? "pr-8 border-r border-[#E8E9F2]" : ""}`}>
							<div className="font-bold tracking-[-0.01em]">
								{item.value}
							</div>
							<div className="text-xs text-[#7E8299] mt-2">
								{item.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</ApartmentFormCard>
	)
}
