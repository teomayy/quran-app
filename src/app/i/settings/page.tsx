'use client'

import { Heading } from '@/components/ui/Heading'
import Settings from '@/components/ui/Settings/Settings'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function page() {
	const { lang } = useLanguageStore()
	return (
		<div className='p-4 m-4 overflow-y-hidden h-screen rounded-lg'>
			<Heading title={lang === 'latin' ? 'Sozlamalar' : 'Созламалар'} />
			<Settings />
		</div>
	)
}
