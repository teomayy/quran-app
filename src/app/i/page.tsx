'use client'

import { Heading } from '@/components/ui/Heading'
import MostListened from '@/components/ui/Most_Listened/MostListened'
import SpeakersSection from '@/components/ui/Speakers/SpeakersSection'
import VoicesSection from '@/components/ui/Voices/VoicesSection'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function DashboardPage() {
	const { language } = useLanguageStore()
	return (
		<div className='m-4 bg-white rounded-lg'>
			<div>
				<Heading title={language === 'latin' ? 'Bosh sahifa' : 'Бош саҳифа'} />
			</div>
			<div className='px-6'>
				<MostListened />
				<SpeakersSection />
				<VoicesSection />
			</div>
		</div>
	)
}
