import Shorts from './Shorts'
import { SHORTS_DATA } from '@/data/shorts-data'

const ShortsList: React.FC = () => {
	return (
		<div className='shorts-list-container h-screen overflow-y-scroll snap-y snap-mandatory'>
			{SHORTS_DATA.map(short => (
				<div
					key={short.id}
					className='shorts-item h-screen snap-start flex justify-center '
				>
					<Shorts
						videoSrc={short.videoSrc}
						speaker={short.speaker}
						speakerPhoto={short.speakerPhoto}
						title={short.title}
					/>
				</div>
			))}
		</div>
	)
}

export default ShortsList
