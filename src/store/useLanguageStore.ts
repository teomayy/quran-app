import { create } from 'zustand'

export const useLanguageStore = create<{
	lang: string
	setLang: (newLang: string) => void
}>(set => ({
	lang: 'latin',
	setLang: (newLang: string) => set({ lang: newLang })
}))
