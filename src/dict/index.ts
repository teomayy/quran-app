import { useLanguageStore } from '@/store/useLanguageStore'

import cyrillic from './cyrillic'
import latin from './latin'

const dict: Record<string, Record<string, string>> = {
	latin: latin,
	cyrillic: cyrillic
}

type LangTextProps = {
	id: string
}

export const LangText = ({ id }: LangTextProps) => {
	const lang = useLanguageStore(state => state.lang)
	const translation = dict[lang] && dict[lang][id]
	return translation || id
}
