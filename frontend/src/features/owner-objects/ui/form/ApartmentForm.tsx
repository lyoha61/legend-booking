import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PricingCard } from './PricingCard';
import { GeneralInfoCard } from './GeneralInfoCard';
import { PropertyDetailsCard } from './PropertyDetailsCard';
import { useState } from 'react';
import { FormActions } from './FormActions';
import { createApartment } from '../../api/ownerObjectsApi';
import type { CreateApartmentRequest } from '../../api/types';

export const ApartmentForm = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		number: "",
		floor: "1",
		area: "0",
		roomsCount: 1,
		maxGuests: 2,
		price: "0",
	});

	const updateField = <K extends keyof typeof form>(
		field: K,
		value: typeof form[K]
	) => {
		setForm(prev => ({
			...prev,
			[field]: value,
		}));
	};

	const handleCreateApartment = async () => {
		const data : CreateApartmentRequest = {
			...form,
			floor: Number(form.floor),
			area: Number(form.area),
			price: Number(form.price),
		};
		const res = await createApartment(data);
		console.log(res);
	}

	return (
		<div>
			<div
				className='flex items-center gap-1 text-gray-500 mb-3 cursor-pointer hover:bg-gray-200/50 w-fit rounded-full p-3 transition-colors duration-200'
				onClick={() => navigate(-1)}
			>
				<ArrowLeft className='size-5' />
				<span>Назад</span>
			</div>
			<div className='mb-7'>
				<h1>
					Создать объект
				</h1>
				<span className="text-gray-500">
					Заполните приведенные ниже данные, чтобы разместить информацию о вашей квартире на LegendBooking
				</span>
			</div>

			<div className='grid md:grid-cols-[2.5fr_1fr] gap-7 items-start'>
				<div className='flex flex-col gap-5'>
					<GeneralInfoCard
						name={form.name}
						number={form.number}
						floor={form.floor}
						onNameChange={(v) => updateField("name", v)}
						onNumberChange={(v) => updateField("number",v)}
						onFloorChange={(v) => updateField("floor", v)}
					/>
					<PropertyDetailsCard
						area={form.area}
						roomsCount={form.roomsCount}
						maxGuests={form.maxGuests}
						onAreaChange={(v) => updateField("area", v)}
						onRoomsChange={(v) => updateField("roomsCount", v)}
						onGuestsChange={(v) => updateField("maxGuests", v)}
					/>
				</div>
				<div className='flex flex-col gap-5'>
					<PricingCard price={form.price} onChangePrice={(v) => updateField("price", v)} />
					<FormActions onCreateApartment={handleCreateApartment} />
				</div>
			</div>
		</div>
	)
}
