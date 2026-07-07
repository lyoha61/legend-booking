import { Plus } from 'lucide-react';

export const ObjectsTitle = () => {
	return (
		<div className='flex justify-between items-center'>
			<div>
				<h1>Объекты</h1>
				<span className='text-sm text-gray-600'>
					Управляйте своими объявлениями, отслеживайте эффективность и контролируйте бронирования.
				</span>
			</div>
			<button className='flex gap-1 items-center bg-emerald-600/90 text-white p-3 rounded-full text-sm shadow-sm shadow-emerald-500/40 cursor-pointer'>
				<Plus className='size-5' />
				<span className='font-semibold'>Добавить объект</span>
			</button>

		</div>
	)
}
