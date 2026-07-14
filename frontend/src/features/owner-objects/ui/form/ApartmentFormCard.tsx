type Props = {
	title: string,
	description: string,
	icon?: React.ElementType,
	className?: string,
	children: React.ReactNode
}


export const ApartmentFormCard = ({ title, description, icon: Icon, className, children }: Props) => {

	return (
		<div className={`apartment-form-card ${className}`}>
			<div className='border-b px-6 py-5  border-[#F3F4F6]'>
				<div className='flex items-center gap-3'>
					{Icon && (
						<div className='flex items-center justify-center rounded-lg w-8 h-8 shrink-0 bg-[#EEF2FF]'>
							<Icon className='text-[#4F46E5]' size={15} />
						</div>
					)}
					<div>
						<h2 className='text-base leading-5'>{title}</h2>
						<span className='text-sm text-gray-500'>{description}</span>
					</div>
				</div>
			</div>
			<div className="px-6 py-5">
				{children}
			</div>
		</div>
	)
}
