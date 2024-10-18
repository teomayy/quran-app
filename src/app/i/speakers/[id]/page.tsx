'use client'

import { Heart, Play, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'

import SurahTable from '@/components/ui/Speakers/SurahTable'

import { juzs } from '@/data/juzs-data'
import { SPEAKERS } from '@/data/speakers-data'
import { surahs } from '@/data/surahs-data'

const SpeakerPage = () => {
	const { id } = useParams()

	const speaker = SPEAKERS.find(s => s.id === Number(id))

	if (!speaker) {
		return <div>Speaker not found</div>
	}

	return (
		<div className='p-4'>
			<div className='p-4 border bg-white rounded-lg shadow-sm'>
				<div className='flex items-center space-x-4'>
					<div className='border p-1 rounded-lg border-[#CA9B79]'>
						<img
							src={speaker.image}
							alt={speaker.name}
							className='w-44 h-44 object-cover rounded-lg'
						/>
					</div>

					<div className='flex flex-col justify-between gap-10 w-1/2'>
						<div>
							<h2 className='text-2xl font-bold'>{speaker.name}</h2>
							<p className='text-#605a5a-200'>{speaker.birth_place}</p>
						</div>
						<div className='flex gap-10 text-primary items-center '>
							<div className='border rounded-xl flex items-center gap-2 p-2'>
								<button className=' border rounded-full p-2 border-primary'>
									<Play className='w-4 h-4' />
								</button>
								Tinglash
							</div>
							<div className='flex gap-2'>
								<div className='border rounded-xl '>
									<button className='p-2'>
										<Heart className='w-8 h-8' />
									</button>
								</div>
								<div className='border rounded-xl'>
									<button className='p-2'>
										<Share2 className='w-8 h-8' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SurahTable
				surahs={surahs}
				juzs={juzs}
				photo={speaker.image}
				speakerName={speaker.name}
			/>
		</div>
	)
}
export default SpeakerPage
