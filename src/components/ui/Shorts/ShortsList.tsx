import Shorts from './Shorts'
import { SHORTS_DATA } from '@/data/shorts-data'

const ShortsList: React.FC = () => {
	return (
		<div className='shorts-list-container h-screen overflow-y-scroll snap-y snap-mandatory'>
			{SHORTS_DATA.map((short, index) => (
				<div
					key={short.videoId}
					className='shorts-item h-screen snap-start'
				>
					<Shorts
						videoId={short.videoId}
						videoUrl={short.videoUrl}
						title={short.title}
						index={index}
					/>
				</div>
			))}
		</div>
	)
}

export default ShortsList
