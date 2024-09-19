'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

import SpeakersCard from './SpeakersCard'
import { ISpeakerItem } from './speakers.interface'
import { SPEAKERS } from '@/data/speakers-data'
import { LangText } from '@/dict'

const SpeakersSection: React.FC = () => {
	const { lang } = useLanguageStore()
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
			<div className='mb-4 flex md:justify-between gap-2'>
				<h2 className='md:text-2xl text-sm font-medium'>
					<LangText id='speakers' />
				</h2>
				<button onClick={handleToggleShowAll}>
					<span className='text-sm hidden md:block font-light'>
						{showAll
							? lang === 'latin'
								? 'Yashirish'
								: 'Яшириш'
							: lang === 'latin'
								? 'Barchasi'
								: 'Барчаси'}
					</span>
					<ChevronRight className='block md:hidden' />
				</button>
			</div>

			<div className='flex flex-row overflow-y-auto md:grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 '>
				{visibleSpeakers.map(speaker => (
					<SpeakersCard
						key={speaker.id}
						{...speaker}
					/>
				))}
			</div>
		</section>
	)
}

export default SpeakersSection
