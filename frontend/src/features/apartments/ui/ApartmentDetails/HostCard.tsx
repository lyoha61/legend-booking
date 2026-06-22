import { StarFilledIcon } from '@/shared/icons/StarFilledIcon';

type HostCardProps = {
  className?: string;
};


export const HostCard = ({ className }: HostCardProps ) => {

	return (
		<div className={`flex gap-4 items-center ${className}`}>
			<div className="rounded-full p-3 host-card-gradient w-fit text-white">
				AM
			</div>
			<div className='flex flex-col'>
				<span className="text-gray-900 font-semibold">Александр Марков</span>
				<div className='flex items-center gap-2'>
					<StarFilledIcon className='text-[#B45307]' />
					<span className='text-gray-500 text-sm font-light'>Рейтинг 4.95</span>
				</div>
			</div>
		</div>
	)
}
