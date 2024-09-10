import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ILanguageStore {
	language: 'latin' | 'cyrillic'
	toggleLanguage: () => void
	setLanguage: (lang: 'latin' | 'cyrillic') => void
}

export const useLanguageStore = create<ILanguageStore>()(
	persist(
		set => ({
			language: 'latin',
			toggleLanguage: () =>
				set(state => ({
					language: state.language === 'latin' ? 'cyrillic' : 'latin'
				})),
			setLanguage: (lang: 'latin' | 'cyrillic') => set({ language: lang })
		}),
		{
			name: 'quran-app-language'
		}
	)
)
