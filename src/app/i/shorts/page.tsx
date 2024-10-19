'use client'

import { Heading } from '@/components/ui/Heading'
import ShortsList from '@/components/ui/Shorts/ShortsList'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function page() {
	const { lang } = useLanguageStore()

	return (
		<div className='md:p-2 md:m-1 md:bg-white md:rounded-lg'>
			<div className='hidden md:block'>
				<Heading title={lang === 'latin' ? 'Qisqa' : 'Қисқа'} />
			</div>
			<ShortsList />
		</div>
	)
}
