import { Heart, PlayIcon } from 'lucide-react'
import { useState } from 'react'

interface Surah {
	name: string
	place: string
	ayatCount: number
	duration: string
	isFavorite: boolean
}

interface SurahTableProps {
	surahs: Surah[]
	photo: string
	speakerName: string
}

export default function ({ surahs, photo, speakerName }: SurahTableProps) {
	const [favoriteSurahs, setFavoriteSurahs] = useState(surahs)

	const toggleFavorite = (index: number) => {
		const updatedSurahs = [...favoriteSurahs]
		updatedSurahs[index].isFavorite = !updatedSurahs[index].isFavorite
		setFavoriteSurahs(updatedSurahs)
	}

	return (
		<div>
			<div className='grid grid-cols-10 gap-2  p-2 rounded-lg font-medium text-gray-800 border-b text-xs'>
				<div className='col-span-3'>Sura nomi</div>
				<div className='col-span-2'>Nozil bo'lgan joy</div>
				<div className='col-span-2'>Oyatlar soni</div>
				<div className='col-span-2'>Davomiyligi</div>
				<div className='flex justify-end'>Sevimli</div>
			</div>

			<div className='divide-y divide-gray-300 mt-4 max-h-[400px] overflow-y-auto mb-20'>
				{favoriteSurahs.map((surah, index) => (
					<div
						key={index}
						className='grid grid-cols-10 gap-4 p-2 items-center text-sm'
					>
						{/* Play Button */}

						{/* Speaker Image and Surah Info */}
						<div className='flex items-center space-x-2 col-span-3'>
							<button className='border-2 border-gray-700 p-1 rounded-full hover:text-green-600'>
								<PlayIcon className='w-4 h-4' />
							</button>
							<div className='border p-1 rounded-lg'>
								<img
									src={photo}
									alt={surah.name}
									className='w-14 h-14 rounded-lg object-cover'
								/>
							</div>

							<div>
								<div>{surah.name}</div>
								<div className='text-xs text-gray-500'>{speakerName}</div>
							</div>
						</div>

						<div className='col-span-2 text-[#8B8B8B]'>{surah.place}</div>
						<div className='col-span-2 text-[#8B8B8B]'>
							{surah.ayatCount} oyat
						</div>
						<div className='col-span-2 text-[#8B8B8B]'>{surah.duration}</div>

						{/* Favorite Icon with Toggle */}
						<div className='text-center flex justify-center'>
							<button onClick={() => toggleFavorite(index)}>
								{surah.isFavorite ? (
									<Heart className='fill-primary text-primary' />
								) : (
									<Heart className='text-gray-400' />
								)}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
