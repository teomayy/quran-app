'use client'

import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

const Settings = () => {
	const { language, toggleLanguage, setLanguage } = useLanguageStore()
	const [dailyVerse, setDailyVerse] = useState(true)
	const [saveHistory, setSaveHistory] = useState(true)

	useEffect(() => {
		const savedLanguage = localStorage.getItem('quran-app-language')
		if (savedLanguage) {
			setLanguage(savedLanguage as 'latin' | 'cyrillic')
		}
	}, [setLanguage])

	return (
		<div className='flex flex-col gap-3 mt-3'>
			<div className=' bg-white p-6 rounded-lg'>
				<h2 className='text-xl font-semibold mb-4'>
					{language === 'latin' ? 'Asosiy' : 'Асосий'}
				</h2>
				<div className='h-0.5 bg-gray-200 mb-6 w-full'></div>
				<div className='flex items-center justify-between mb-4 w-1/2'>
					<span className='text-lg'>
						{language === 'latin'
							? 'Kunlik oyatlar tavsiya qilinsinmi?'
							: 'Кунлик оятлар тавсия қилинсинми?'}
					</span>
					<Switch
						checked={dailyVerse}
						onChange={setDailyVerse}
						className={`${dailyVerse ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full `}
					>
						<span className='sr-only'>Enable Daily Verse</span>
						<span
							className={`${dailyVerse ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
				<div className='flex items-center justify-between w-1/2'>
					<span className='text-lg'>
						{language === 'latin'
							? 'Eshitilganlar tarixi saqlansinmi?'
							: 'Эшитилганлар тирихини сақлансинми?'}
					</span>
					<Switch
						checked={saveHistory}
						onChange={setSaveHistory}
						className={`${saveHistory ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Save Listening History</span>
						<span
							className={`${saveHistory ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
			</div>

			<div className=' bg-white p-6 rounded-lg'>
				<h2 className='text-xl font-semibold mb-4'>
					{language === 'latin' ? 'Til sozlamari' : 'Тил созломалари'}
				</h2>
				<div className='h-0.5 bg-border mb-6 w-full'></div>
				<div className='flex items-center justify-between mb-4 w-1/2'>
					<span className='text-lg'>O'zbekcha (Lotin)</span>
					<Switch
						checked={language === 'latin'}
						onChange={toggleLanguage}
						className={`${language === 'latin' ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Switch to Latin</span>
						<span
							className={`${language === 'latin' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full  bg-white transition`}
						></span>
					</Switch>
				</div>
				<div className='flex items-center justify-between w-1/2'>
					<span className='text-lg'>Ўзбекча (Кирилл)</span>
					<Switch
						checked={language === 'cyrillic'}
						onChange={toggleLanguage}
						className={`${language === 'cyrillic' ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Switch to Cyrillic</span>
						<span
							className={`${language === 'cyrillic' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Settings
