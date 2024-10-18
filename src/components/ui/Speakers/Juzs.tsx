import { Heart, Play } from 'lucide-react'
import { useState } from 'react'

interface Juz {
	surfaceNumber: string
	composition: string
	duration: string
	isFavorite: boolean
}

interface JuzTableProps {
	juzs: Juz[]
	photo: string
	speakerName: string
}

export default function ({ juzs, photo, speakerName }: JuzTableProps) {
	const [favoriteJuzs, setFavoriteJuzs] = useState(juzs)

	const toggleFavorite = (index: number) => {
		const updatedJuzs = [...favoriteJuzs]
		updatedJuzs[index].isFavorite = !updatedJuzs[index].isFavorite
		setFavoriteJuzs(updatedJuzs)
	}

	return (
		<div>
			<div className='grid grid-cols-8 gap-2 p-2 rounded-lg font-medium text-gray-800 border-b text-xs'>
				<div className='col-span-3'>Juz tartib raqami</div>
				<div className='col-span-2'>Juz tarkibi</div>
				<div className='col-span-2'>Davomiligi</div>
				<div className='flex justify-center'>Sevimli</div>
			</div>

			<div className='divide-y mb-20 divide-gray-300 mt-4 max-h-[400px] overflow-y-auto'>
				{favoriteJuzs.map((juz, index) => (
					<div
						key={index}
						className='grid grid-cols-8 p-2 items-center '
					>
						<div className='flex items-center space-x-2 col-span-3'>
							<button className='border-2 border-gray-700 p-1 rounded-full hover-text-green-600'>
								<Play className='w-4 h-4' />
							</button>
							<div className='border p-1 rounded-lg'>
								<img
									src={photo}
									alt={juz.surfaceNumber}
									className='w-14 h-14 rounded-lg object-cover'
								/>
							</div>

							<div>
								<div>{juz.surfaceNumber}</div>
								<div className='text-xs text-[#8B8B8B]'>{speakerName}</div>
							</div>
						</div>

						<div className='col-span-2 text-[#8B8B8B]'>{juz.composition}</div>
						<div className='col-span-2 text-[#8B8B8B]'>{juz.duration}</div>

						<div className='text-center flex justify-center'>
							<button onClick={() => toggleFavorite(index)}>
								{juz.isFavorite ? (
									<Heart className='fill-primary text-primary' />
								) : (
									<Heart className='text=gray-400' />
								)}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
