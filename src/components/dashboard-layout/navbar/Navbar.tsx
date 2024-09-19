'use client'

import { Search } from 'lucide-react'

import { useLanguageStore } from '@/store/useLanguageStore'

export function Navbar() {
	const { lang } = useLanguageStore()
	return (
		<header className='p-4 hidden md:block'>
			<form className='relative flex items-center w-full gap-4 '>
				<input
					type='text'
					placeholder={lang === 'latin' ? 'Qidirish' : 'Қидириш'}
					className='bg-white placeholder:font-bold w-full h-12 sm:h-[64px] px-4 rounded-lg pl-10'
				/>
				<button
					type='submit'
					className='absolute left-3'
				>
					<Search className='text-gray-400' />
				</button>
			</form>
		</header>
	)
}
