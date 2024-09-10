import { CircleChevronLeft, CircleChevronRight, Play } from 'lucide-react'

import { useLanguageStore } from '@/store/useLanguageStore'

export function DayVerse() {
	const { language } = useLanguageStore()

	return (
		<div className='bg-primary p-4 mt-4 rounded-lg max-w-sm mx-auto'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-white text-xl font-bold'>
					{language === 'latin' ? 'Kun oyati' : 'Кўн ояти'}
				</h2>
				<div className='flex space-x-2'>
					<button className='text-white'>
						<CircleChevronLeft />
					</button>
					<button className='text-white'>
						<CircleChevronRight />
					</button>
				</div>
			</div>
			<div className='bg-white p-4 rounded-lg'>
				<img
					src='/mishary.jpeg'
					alt='Mishary Roshid Alafasy'
					className='rounded-lg mb-4 w-full object-cover'
				/>
				<div>
					<h3 className='text-gray-800 font-medium'>067 Mulk surasi 17</h3>
					<p className='text-gray-600 mb-4'>Mishary Roshid Alafasy</p>
					<div className='flex items-center mb-2'>
						<input
							type='range'
							className='w-full h-1 bg-gray-300 rounded-lg'
							value='30'
							max='57'
						/>
					</div>
					<div className='flex justify-between text-sm text-gray-600 mb-4'>
						<span>0:30</span>
						<span>0:57</span>
					</div>
					<button className='bg-green-800 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto'>
						<Play fill='#FFF' />
					</button>
				</div>
			</div>
		</div>
	)
}
