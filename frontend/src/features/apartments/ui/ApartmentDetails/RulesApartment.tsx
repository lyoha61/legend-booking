import { CircleCheck, CircleX, CircleAlert } from 'lucide-react';

export const RulesApartment = () => {
	return (
		<div className='flex flex-col gap-5'>
			<h2>Правила апартаментов</h2>
			<div>
				<div className='grid grid-cols-2 gap-y-6'>
					<div className='flex gap-3'>
						<div className='h-fit bg-blue-50 w-fit p-2 rounded-full shadow-sm'>
							<CircleAlert className='size-5 text-blue-600' />
						</div>
						<div className='flex flex-col gap-1.5'>
							<span className='font-semibold'>Заезд и выезд</span>
							<span
								className='text-sm text-gray-500 font-light'
							>
								Заезд с 15:00, выезд до 11:00.
							</span>
						</div>
					</div>

					<div className='flex gap-3'>
						<div className='h-fit bg-gray-200 w-fit p-2 rounded-full shadow-sm'>
							<CircleX className='size-5 text-gray-500' />
						</div>
						<div className='flex flex-col gap-1.5'>
							<span className='font-semibold'>Курение</span>
							<span
								className='text-sm text-gray-500 font-light'
							>
								Курение в апартаментах строго запрещено.
							</span>
						</div>
					</div>

					<div className='flex gap-3'>
						<div className='h-fit bg-mint-gray w-fit p-2 rounded-full shadow-sm'>
							<CircleCheck className='size-5 text-teal-700' />
						</div>
						<div className='flex flex-col gap-1.5'>
							<span className='font-semibold'>Заезд и выезд</span>
							<span
								className='text-sm text-gray-500 font-light'
							>
								Заезд с 15:00, выезд до 11:00.
							</span>
						</div>
					</div>

					<div className='flex gap-3'>
						<div className='h-fit bg-gray-200 w-fit p-2 rounded-full shadow-sm'>
							<CircleX className='size-5 text-gray-500' />
						</div>
						<div className='flex flex-col gap-1.5'>
							<span className='font-semibold'>Мероприятия</span>
							<span
								className='text-sm text-gray-500 font-light'
							>
								Проведение вечеринок не разрешено.
							</span>
						</div>
					</div>

					<div className='flex gap-3'>
						<div className='h-fit bg-blue-50 w-fit p-2 rounded-full shadow-sm'>
							<CircleAlert className='size-5 text-blue-600' />
						</div>
						<div className='flex flex-col gap-1.5'>
							<span className='font-semibold'>Тихие часы</span>
							<span
								className='text-sm text-gray-500 font-light'
							>
								Просьба соблюдать тишину с 22:00 до 08:00.
							</span>
						</div>
					</div>
			</div>
			</div>
		</div>
	)
}
