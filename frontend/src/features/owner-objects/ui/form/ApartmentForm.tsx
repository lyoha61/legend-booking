import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PricingCard } from './PricingCard';
import { GeneralInfoCard } from './GeneralInfoCard';
import { PropertyDetailsCard } from './PropertyDetailsCard';
import { useState } from 'react';

export const ApartmentForm = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		number: "",
		floor: "",
		area: "",
		price: ""
	});

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
					<GeneralInfoCard />
					<PropertyDetailsCard />
				</div>
				<div>
					<PricingCard />
				</div>
			</div>
		</div>
	)
}
