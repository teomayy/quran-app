'use client'

import { Heading } from '@/components/ui/Heading'
import Settings from '@/components/ui/Settings/Settings'

import { useLanguageStore } from '@/store/useLanguageStore'

export default function page() {
	const { language } = useLanguageStore()
	return (
		<div className='p-4 m-4  rounded-lg'>
			<Heading title={language === 'latin' ? 'Sozlamalar' : 'Созламалар'} />
			<Settings />
		</div>
	)
}
