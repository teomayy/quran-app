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
		<div className='w-full bg-cardBg flex flex-row gap-3 items-start grid-rows-1	 p-4 border border-gray-200 rounded-lg'>
			<div className='md:w-16 md:h-16 w-10 h-10 p-0.5 border border-[#CA9B79] rounded-lg'>
				<img
					src={image}
					alt={name}
					className='w-full h-full object-cover rounded-lg'
				/>
			</div>
			<div className='flex flex-col gap-2 '>
				<p className='text-xs'>{name}</p>
				<sub className='text-xs text-[#5D5D5D]'>{subtitle}</sub>
			</div>
		</div>
	)
}

export default MostListenedCard
