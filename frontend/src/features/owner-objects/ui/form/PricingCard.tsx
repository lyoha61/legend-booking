import { BadgeRussianRuble, RussianRuble } from 'lucide-react';

import { ApartmentFormCard } from "./ApartmentFormCard"
import { InputWrapper } from '@/shared/InputWrapper';
import { validatePrice } from '../../model/validation';
import { useField } from '@/shared/hooks/useField';

export const PricingCard = () => {
	const {
	  field: price,
	  onChange: setPrice,
	  onFocus: priceFocus,
	  onBlur: priceBlur,
	  setError: setPriceError
	} = useField("", validatePrice);

	const inputClass =
		"w-full px-10 py-3 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none rounded-xl bg-white";

	return (
		<ApartmentFormCard
			title="Цена"
			description="Установите цену за ночь"
			icon={BadgeRussianRuble}
		>
			<div className='flex flex-col gap-5'>
				<InputWrapper label='Цена за ночь' field={price} icon={RussianRuble}>
					<input
						type="text"
						placeholder="0.00"
						className={inputClass}
						onChange={(e) => setPrice(e.target.value)}
						onFocus={priceFocus}
						onBlur={priceBlur}
					/>
				</InputWrapper>
				<div className='text-gray-400/90 text-sm mt-2'>Клиенты видят эту цену в объявлении</div>
				<div className='p-3 rounded-lg text-xs bg-[#EEF2FF] text-[#4F46E5]'>
					Комиссия сервиса LegendBooking (10%) автоматически удерживается из каждого бронирования.
				</div>
			</div>
		</ApartmentFormCard>
	)
}
