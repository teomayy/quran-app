import { Heart, Home, Settings, Zap } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { useLanguageStore } from '@/store/useLanguageStore'

import { IMenuItem } from './menu.interface'

export const MENU = (): IMenuItem[] => {
	const { language } = useLanguageStore()

	return [
		{
			icon: Home,
			link: DASHBOARD_PAGES.HOME,
			name: language === 'latin' ? 'Bosh sahifa' : 'Бош саҳифа'
		},
		{
			icon: Zap,
			link: DASHBOARD_PAGES.SHORTS,
			name: language === 'latin' ? 'Qisqa' : 'Қисқа'
		},
		{
			icon: Heart,
			link: DASHBOARD_PAGES.FAVORITES,
			name: language === 'latin' ? 'Sevimli' : 'Севимли'
		},
		{
			icon: Settings,
			link: DASHBOARD_PAGES.SETTINGS,
			name: language === 'latin' ? 'Sozlamalar' : 'Созламалар'
		}
	]
}
