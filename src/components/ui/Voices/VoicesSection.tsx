'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

import { ISpeakerItem } from '../Speakers/speakers.interface'

import VoicesCard from './VoicesCard'
import { SPEAKERS } from '@/data/speakers-data'
import { LangText } from '@/dict'

const VoicesSection: React.FC = () => {
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
			<div className='my-4 flex md:justify-between gap-2'>
				<h2 className='md:text-2xl text-sm font-medium'>
					<LangText id='voices' />
				</h2>
				<button onClick={handleToggleShowAll}>
					<span className='text-sm font-light hidden md:block'>
						{showAll
							? lang === 'latin'
								? 'Yashirish'
								: 'Яшириш'
							: lang === 'latin'
								? 'Barchasi'
								: 'Барчаси'}{' '}
					</span>
					<ChevronRight className='block md:hidden' />
				</button>
			</div>

			<div className='flex md:grid flex-row overflow-y-auto gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 '>
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
