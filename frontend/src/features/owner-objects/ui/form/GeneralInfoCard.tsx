import { ApartmentFormCard } from "./ApartmentFormCard"
import { FileText } from 'lucide-react';
import { InputWrapper } from '@/shared/InputWrapper';
import { validateApartmentName, validateApartmentNumber } from '../../model/validation';
import { useField } from '@/shared/hooks/useField';

export const GeneralInfoCard = () => {
	const {
	  field: name,
	  onChange: setName,
	  onFocus: nameFocus,
	  onBlur: nameBlur,
	  setError: setNameError
	} = useField("", validateApartmentName);

	const {
	  field: number,
	  onChange: setNumber,
	  onFocus: numberFocus,
	  onBlur: numberBlur,
	  setError: setNumberError
	} = useField("", validateApartmentNumber);

	const {
	  field: floor,
	  onChange: setFloor,
	  onFocus: floorFocus,
	  onBlur: floorBlur,
	  setError: setFloorError
	} = useField("", validateApartmentNumber);

	const inputClass =
		"w-full px-5 py-3 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none rounded-xl bg-white";


	return (
		<ApartmentFormCard
			title='Общая информация'
			description='Основные данные для идентификации вашей квартиры'
			icon={FileText}
			className="h-auto"
		>
			<div className='flex flex-col gap-4'>
				<InputWrapper label='Название квартиры' field={name}>
					<input
						type="text"
						placeholder="Курортная улица, 3к3"
						className={inputClass}
						onChange={(e) => setName(e.target.value)}
						onFocus={nameFocus}
						onBlur={nameBlur}
					/>
				</InputWrapper>

				<div className='grid grid-cols-2 gap-5'>
					<InputWrapper label='Номер квартиры' field={number}>
						<input
							type="text"
							placeholder="10 a"
							className={inputClass}
							onChange={(e) => setNumber(e.target.value)}
							onFocus={numberFocus}
							onBlur={numberBlur}
						/>
					</InputWrapper>

					<InputWrapper label='Этаж' field={floor}>
						<input
							type="number"
							placeholder="1"
							className={`${inputClass} no-spinner`}
							onChange={(e) => setFloor(e.target.value)}
							onFocus={floorFocus}
							onBlur={floorBlur}
						/>
					</InputWrapper>
				</div>
			</div>
		</ApartmentFormCard>
 )
}
