interface ISCardProps {
	image: string
	name: string
	birth_place: string
}

const SpeakersFullCard: React.FC<ISCardProps> = ({
	name,
	image,
	birth_place
}) => {
	return (
		<div className='w-full flex flex-col gap-2 mb-4  items-start '>
			<div className='md:w-44 md:h-44 h-28 w-44'>
				<img
					src={image}
					alt={name}
					className='w-full h-full rounded-lg object-cover'
				/>
			</div>

			<p>{name}</p>
			<sub className='hidden md:block'>{birth_place}</sub>
		</div>
	)
}

export default SpeakersFullCard
