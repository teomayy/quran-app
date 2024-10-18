import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

interface ISCardProps {
	id: number
	image: string
	name: string
	birth_place: string
}

const SpeakersFullCard: React.FC<ISCardProps> = ({
	id,
	name,
	image,
	birth_place
}) => {
	return (
		<Link href={`${DASHBOARD_PAGES.HOME}/speakers/${id}`}>
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
		</Link>
	)
}

export default SpeakersFullCard
