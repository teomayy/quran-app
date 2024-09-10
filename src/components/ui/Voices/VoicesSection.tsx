'use client'

import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

import { ISpeakerItem } from '../Speakers/speakers.interface'

import VoicesCard from './VoicesCard'
import { SPEAKERS } from '@/data/speakers-data'

const VoicesSection: React.FC = () => {
	const { language } = useLanguageStore()
	const [showAll, setShowAll] = useState(false)
	const [columns, setColumns] = useState(5)

	const speakers: ISpeakerItem[] = SPEAKERS
	const visibleSpeakers = showAll ? speakers : speakers.slice(0, columns)

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			if (width < 992) {
				setColumns(4)
			} else if (width < 1280) {
				setColumns(3)
			} else {
				setColumns(5)
			}
		}
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	const handleToggleShowAll = () => {
		setShowAll(!showAll)
	}

	return (
		<section>
			<div className='my-4 flex justify-between'>
				<h2 className='text-2xl font-medium'>
					{language === 'latin' ? 'Voizlar' : 'Воизлар'}
				</h2>
				<button onClick={handleToggleShowAll}>
					<span className='text-sm font-light'>
						{showAll
							? language === 'latin'
								? 'Yashirish'
								: 'Яшириш'
							: language === 'latin'
								? 'Barchasi'
								: 'Барчаси'}{' '}
					</span>
				</button>
			</div>

			<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 '>
				{visibleSpeakers.map(speaker => (
					<VoicesCard
						key={speaker.id}
						{...speaker}
					/>
				))}
			</div>
		</section>
	)
}

export default VoicesSection
