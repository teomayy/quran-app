interface ISCardProps {
	image: string
	name: string
	birth_place: string
}

const SpeakersCard: React.FC<ISCardProps> = ({ name, image, birth_place }) => {
	return (
		<div className='w-full flex flex-col gap-2 mb-4  items-start '>
			<div className='w-60 h-60 sm:w-[183px] sm:h-[183px] '>
				<img
					src={image}
					alt={name}
					className='w-full h-full rounded-lg object-cover'
				/>
			</div>

			<p>{name}</p>
			<sub>{birth_place}</sub>
		</div>
	)
}

export default SpeakersCard
