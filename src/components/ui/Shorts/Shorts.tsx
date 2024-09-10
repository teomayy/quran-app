'use client'

import { ChevronDown, ChevronUp, Download, Heart, Share } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import useFavoriteStore from '@/store/useFavoriteStore'

import { SHORTS_DATA } from '@/data/shorts-data'

interface ShortsProps {
	videoId: string
	videoUrl: string
	title: string
	index: number
}

const Shorts: React.FC<ShortsProps> = ({ videoId, videoUrl, title, index }) => {
	const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore()
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
	const playerRef = useRef<ReactPlayer>(null)

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
		const isScrolledToBottom = scrollHeight - scrollTop === clientHeight

		if (isScrolledToBottom && currentVideoIndex < SHORTS_DATA.length - 1) {
			setCurrentVideoIndex(currentVideoIndex + 1)
		} else if (scrollTop === 0 && currentVideoIndex > 0) {
			setCurrentVideoIndex(currentVideoIndex - 1)
		}
	}

	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.seekTo(0, 'seconds')
		}
	}, [currentVideoIndex])

	const handleFavoriteClick = () => {
		if (isFavorite(videoId)) {
			removeFavorite(videoId)
		} else {
			addFavorite(videoId)
		}
	}

	const handleDownloadClick = () => {
		const link = document.createElement('a')
		link.href = videoUrl
		link.download = title
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const handleShareClick = () => {
		if (navigator.share) {
			navigator
				.share({
					title: title,
					url: videoUrl
				})
				.catch(console.error)
		} else {
			alert('Yuklab olish bu browserda mumkin emas')
		}
	}

	return (
		<div
			className='relative w-full flex flex-row justify-center items-end overflow-y-auto gap-4'
			onScroll={handleScroll}
		>
			<div
				className={`relative h-[390px] flex items-center justify-center snap-center transition-opacity duration-500 ease-in-out ${
					currentVideoIndex === index
						? 'opacity-100'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				<ReactPlayer
					url={videoUrl}
					playing={currentVideoIndex === index}
					controls={true}
					width='100%'
					height='100%'
					ref={playerRef}
				/>
			</div>
			<div className=' right-10 bottom-10 flex flex-row gap-8 space-y-3 items-end'>
				<div className=' bottom-0 right-10 flex flex-col space-y-2'>
					<button
						onClick={handleFavoriteClick}
						className={`p-4 rounded-full ${isFavorite(videoId) ? 'bg-red-500 text-white' : 'bg-primary'}`}
					>
						<Heart
							className={`h-6 w-6 ${isFavorite(videoId) ? 'text-white' : 'text-white'}`}
						/>
					</button>
					<button
						onClick={handleDownloadClick}
						className='p-4 rounded-full bg-primary'
					>
						<Download className='h-6 w-6 text-white' />
					</button>
					<button
						onClick={handleShareClick}
						className='p-4 rounded-full bg-primary'
					>
						<Share className='h-6 w-6 text-white' />
					</button>
				</div>
				<div className='flex flex-col items-center space-y-1'>
					<button className='p-2 rounded-lg border border-gray-200'>
						<ChevronUp className='h-6 w-6 text-gray-800' />
					</button>
					<button className='p-2 rounded-lg border border-gray-200'>
						<ChevronDown className='h-6 w-6 text-gray-800' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Shorts
