'use client'

import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/store/useLanguageStore'

import { LangText } from '@/dict'

const Settings = () => {
	const { lang, setLang } = useLanguageStore()
	const [dailyVerse, setDailyVerse] = useState(true)
	const [saveHistory, setSaveHistory] = useState(true)

	useEffect(() => {
		try {
			const savedLanguage = localStorage.getItem('quran-app-language')
			if (savedLanguage) {
				setLang(savedLanguage as 'latin' | 'cyrillic')
			}
		} catch (e) {
			console.error('Error accessing localStorage:', e)
		}
	}, [setLang])

	const handleLanguageToggle = (lang: 'latin' | 'cyrillic') => {
		try {
			localStorage.setItem('quran-app-language', lang)
			setLang(lang)
		} catch (e) {
			if (e instanceof DOMException && e.name === 'QuotaExceededError') {
				console.error(
					'LocalStorage quota exceeded. Language setting not saved.'
				)
			} else {
				console.error('Error setting language:', e)
			}
		}
	}

	return (
		<div className=' flex flex-col gap-3 mt-3'>
			<div className='bg-white p-6 rounded-lg'>
				<h2 className='text-xl font-semibold mb-4'>
					<LangText id='settings_main' />
				</h2>
				<div className='h-0.5 bg-gray-200 mb-6 w-full'></div>
				<div className='flex items-center justify-between mb-4 xl:w-1/2'>
					<span className='text-lg'>
						<LangText id='daily_verse' />
					</span>
					<Switch
						checked={dailyVerse}
						onChange={setDailyVerse}
						className={`${dailyVerse ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Enable Daily Verse</span>
						<span
							className={`${dailyVerse ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
				<div className='flex items-center justify-between xl:w-1/2'>
					<span className='text-lg'>
						<LangText id='save_history' />
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
			<div className='bg-white p-6 rounded-lg'>
				<h2 className='text-xl font-semibold mb-4'>
					<LangText id='language_settings' />
				</h2>
				<div className='h-0.5 bg-border mb-6 w-full'></div>
				<div className='flex items-center justify-between mb-4 xl:w-1/2 '>
					<span className='text-lg'>O'zbekcha (Lotin)</span>
					<Switch
						checked={lang === 'latin'}
						onChange={() => handleLanguageToggle('latin')}
						className={`${lang === 'latin' ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Switch to Latin</span>
						<span
							className={`${lang === 'latin' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
				<div className='flex items-center justify-between xl:w-1/2'>
					<span className='text-lg'>Ўзбекча (Кирилл)</span>
					<Switch
						checked={lang === 'cyrillic'}
						onChange={() => handleLanguageToggle('cyrillic')}
						className={`${lang === 'cyrillic' ? 'bg-primary' : 'bg-[#F2F4F7]'} relative inline-flex h-6 w-11 items-center rounded-full`}
					>
						<span className='sr-only'>Switch to Cyrillic</span>
						<span
							className={`${lang === 'cyrillic' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						></span>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Settings
