'use client'

import { Heading } from '@/components/ui/Heading'
import MostListened from '@/components/ui/Most_Listened/MostListened'
import SpeakersSection from '@/components/ui/Speakers/SpeakersSection'
import VoicesSection from '@/components/ui/Voices/VoicesSection'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function DashboardPage() {
	const { lang } = useLanguageStore()
	return (
		<div className='md:m-4 w-full md:bg-white md:rounded-lg '>
			<div>
				<Heading title={lang === 'latin' ? 'Bosh sahifa' : 'Бош саҳифа'} />
			</div>
			<div className='md:px-6 p-4 bg-white rounded-2xl overflow-y-auto h-screen'>
				<MostListened />
				<div className='order-2 md:order-1'>
					<VoicesSection />
				</div>
				<div className='order-1 md:order-2'>
					<SpeakersSection />
				</div>
			</div>
		</div>
	)
}
