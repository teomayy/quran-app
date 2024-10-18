import { useState } from 'react'

import Juzs from './Juzs'
import Surahs from './Surahs'

interface Surah {
	name: string
	place: string
	ayatCount: number
	duration: string
	isFavorite: boolean
}

interface Juz {
	surfaceNumber: string
	composition: string
	duration: string
	isFavorite: boolean
}

interface SurahTableProps {
	surahs: Surah[]
	juzs: Juz[]
	photo: string
	speakerName: string
}

export default function SurahTable({
	surahs,
	juzs,
	photo,
	speakerName
}: SurahTableProps) {
	const [isSurahs, setIsSurahs] = useState(true)

	const toggleSurahs = (isSurahs: boolean) => {
		setIsSurahs(isSurahs)
	}

	return (
		<div className='mt-4 bg-white px-4 py-2'>
			{/* Button section for "Suralar" and "Juzlar" */}
			<div className='inline-block mb-8 py-2 px-2 bg-gray-200 rounded-xl'>
				<button
					onClick={() => toggleSurahs(true)}
					className={`py-2 px-4 rounded-xl ${isSurahs ? 'bg-primary text-white' : 'text-gray-800'}`}
				>
					Suralar
				</button>
				<button
					onClick={() => toggleSurahs(false)}
					className={`py-2 px-4 rounded-xl ${!isSurahs ? 'bg-primary text-white' : 'text-gray-800'}`}
				>
					Juzlar
				</button>
			</div>

			<div className={isSurahs ? 'block' : 'hidden'}>
				<Surahs
					surahs={surahs}
					photo={photo}
					speakerName={speakerName}
				/>
			</div>
			<div className={!isSurahs ? 'block' : 'hidden'}>
				<Juzs
					juzs={juzs}
					photo={photo}
					speakerName={speakerName}
				/>
			</div>
		</div>
	)
}
