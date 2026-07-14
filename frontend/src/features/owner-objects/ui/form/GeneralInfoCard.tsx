import { ApartmentFormCard } from "./ApartmentFormCard"
import { FileText } from 'lucide-react';
import { InputWrapper } from '@/shared/InputWrapper';
import { validateApartmentName, validateApartmentNumber } from '../../model/validation';
import { useField } from '@/shared/hooks/useField';

type Props = {
	name: string,
	number: string,
	floor: string,

	onNameChange: (value: string) => void;
	onNumberChange: (value: string) => void;
	onFloorChange: (value: string) => void;
}

export const GeneralInfoCard = ({
	name,
	number,
	floor,
	onNameChange,
	onNumberChange,
	onFloorChange
}: Props) => {

	const {
	  field: nameField,
	  onChange: setName,
	  onFocus: nameFocus,
	  onBlur: nameBlur,
	  setError: setNameError
	} = useField("", validateApartmentName);

	const {
	  field: numberField,
	  onChange: setNumber,
	  onFocus: numberFocus,
	  onBlur: numberBlur,
	  setError: setNumberError
	} = useField("", validateApartmentNumber);

	const {
	  field: floorField,
	  onChange: setFloor,
	  onFocus: floorFocus,
	  onBlur: floorBlur,
	  setError: setFloorError
	} = useField("", validateApartmentNumber);

	const inputClass =
		"w-full px-5 py-3 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none rounded-xl bg-white";

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		onNameChange(value);
		setName(value);
	}

	const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		onNumberChange(value);
		setNumber(value);
	}

	const handleChangeFloor = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (/^\d*\.?\d*$/.test(value)) {
			onFloorChange(value);
			setFloor(value);
		}
	}

	return (
		<ApartmentFormCard
			title='Общая информация'
			description='Основные данные для идентификации вашей квартиры'
			icon={FileText}
			className="h-auto"
		>
			<div className='flex flex-col gap-4'>
				<InputWrapper label='Название квартиры' field={nameField}>
					<input
						type="text"
						placeholder="Курортная улица, 3к3"
						className={inputClass}
						onChange={handleChangeName}
						onFocus={nameFocus}
						onBlur={nameBlur}
					/>
				</InputWrapper>

				<div className='grid grid-cols-2 gap-5'>
					<InputWrapper label='Номер квартиры' field={numberField}>
						<input
							type="text"
							placeholder="10 a"
							className={inputClass}
							onChange={handleChangeNumber}
							onFocus={numberFocus}
							onBlur={numberBlur}
						/>
					</InputWrapper>

					<InputWrapper label='Этаж' field={floorField}>
						<input
							type="text"
							placeholder="1"
							value={floor}
							className={`${inputClass} no-spinner`}
							onChange={handleChangeFloor}
							onFocus={floorFocus}
							onBlur={floorBlur}
						/>
					</InputWrapper>
				</div>
			</div>
		</ApartmentFormCard>
 )
}
