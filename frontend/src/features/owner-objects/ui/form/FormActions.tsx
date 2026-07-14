import { FilePlus } from 'lucide-react';

type Props = {
	onCreateApartment: () => void;
}

export const FormActions = ({
	onCreateApartment
}: Props) => {
	return (
		<div className='apartment-form-card px-6 py-5'>
			<button
				className='flex gap-2 cursor-pointer items-center justify-center w-full py-3 rounded-xl bg-[#5B5FED] text-white'
				onClick={() => onCreateApartment()}
			>
				<FilePlus className='size-5' />
				<span className='font-semibold'>
					Создать квартиру
				</span>
			</button>
		</div>
	)
}
