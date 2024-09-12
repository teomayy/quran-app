interface IMLCardProps {
	image: string
	name: string
	subtitle: string
}

const MostListenedCard: React.FC<IMLCardProps> = ({
	name,
	image,
	subtitle
}) => {
	return (
		<div className='w-full md:bg-cardBg flex flex-col md:flex-row gap-3 items-start grid-rows-1	 md:p-4 md:border border-gray-200 md:rounded-lg'>
			<div className='md:w-16 md:h-16 w-20 h-20 md:p-0.5 border border-[#CA9B79] overflow-hidden rounded-full md:rounded-lg'>
				<img
					src={image}
					alt={name}
					className='w-full h-full object-cover md:rounded-lg'
				/>
			</div>
			<div className='flex flex-col items-center gap-1 text-center md:text-left'>
				<p className='text-xs max-w-[105px] truncate'>{name}</p>
				<sub className='text-xs text-[#5D5D5D] hidden md:block'>{subtitle}</sub>
			</div>
		</div>
	)
}

export default MostListenedCard
