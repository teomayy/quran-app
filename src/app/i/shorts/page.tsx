'use client'

import { Heading } from '@/components/ui/Heading'
import ShortsList from '@/components/ui/Shorts/ShortsList'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function page() {
	const { lang } = useLanguageStore()

	return (
		<div className='p-4 m-4 bg-white rounded-lg'>
			<Heading title={lang === 'latin' ? 'Qisqa' : 'Қисқа'} />
			<ShortsList />
		</div>
	)
}
