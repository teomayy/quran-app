'use client'

import { ChevronRight } from 'lucide-react'
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

	const buttonText = showAll
		? language === 'latin'
			? 'Yashirish'
			: 'Яшириш'
		: language === 'latin'
			? 'Barchasi'
			: 'Барчаси'

	return (
		<section>
			<div className='md:my-4 mb-2 flex md:justify-between items-center gap-2'>
				<h2 className='md:text-2xl text-sm  font-medium'>
					{language === 'latin' ? "Eng ko'p tinglashadi" : 'Энг кўп тинглашади'}
				</h2>
				<button onClick={handleToggleShowAll}>
					<span className='hidden md:block text-sm font-light'>
						{buttonText}
					</span>
					<ChevronRight className='md:hidden block' />
				</button>
			</div>

			<div className='flex flex-row gap-3 overflow-y-auto overflow-scroll md:grid md:grid-cols-2 lg:grid-cols-3	'>
				{visibleSpeakers.map(speaker => (
					<MostListenedCard
						key={speaker.id}
						{...speaker}
					/>
				))}
			</div>

			<div className='my-4 h-0.5 bg-border w-full hidden md:block'></div>
		</section>
	)
}

export default MostListened
