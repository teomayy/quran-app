'use client'

import { useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

import MostListenedCard from './MostListenedCard'
import { IMLSpeakerItem } from './mostListened-speakers.interface'
import { SPEAKERS_MOST_LISTENED } from '@/data/speakers-mostListened-data'

const MostListened: React.FC = () => {
	const { language } = useLanguageStore()
	const [showAll, setShowAll] = useState(false)

	const speakers: IMLSpeakerItem[] = SPEAKERS_MOST_LISTENED
	const visibleSpeakers = showAll ? speakers : speakers.slice(0, 6)

	const handleToggleShowAll = () => {
		setShowAll(!showAll)
	}

	return (
		<section>
			<div className='my-4 flex justify-between'>
				<h2 className='text-2xl font-medium '>
					{language === 'latin' ? "Eng ko'p tinglashadi" : 'Энг кўп тинглашади'}
				</h2>
				<button onClick={handleToggleShowAll}>
					<span className='text-sm font-light'>
						{showAll
							? language === 'latin'
								? 'Yashirish'
								: 'Яшириш'
							: language === 'latin'
								? 'Barchasi'
								: 'Барчаси'}
					</span>
				</button>
			</div>

			<div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3	'>
				{visibleSpeakers.map(speaker => (
					<MostListenedCard
						key={speaker.id}
						{...speaker}
					/>
				))}
			</div>

			<div className='my-4 h-0.5 bg-border w-full'></div>
		</section>
	)
}

export default MostListened
