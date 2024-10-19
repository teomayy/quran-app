import {
	Download,
	Heart,
	Pause,
	Play,
	Share2,
	Volume2,
	VolumeX
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ShortsProps {
	videoSrc: string
	speaker?: string
	title?: string
	speakerPhoto?: string
}

const Shorts: React.FC<ShortsProps> = ({
	videoSrc,
	speaker,
	title,
	speakerPhoto
}) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [progress, setProgress] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			const currentTime = videoRef.current.currentTime
			const duration = videoRef.current.duration
			setProgress((currentTime / duration) * 100)
		}
	}

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (videoRef.current) {
			const newTime = (e.target.valueAsNumber / 100) * videoRef.current.duration
			videoRef.current.currentTime = newTime
		}
	}

	const togglePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleVideoClick = () => {
		togglePlayPause()
	}

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted
			setIsMuted(videoRef.current.muted)
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && videoRef.current) {
						videoRef.current.play()
						setIsPlaying(true)
					} else if (videoRef.current) {
						videoRef.current.pause()
						setIsPlaying(false)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (videoRef.current) {
			observer.observe(videoRef.current)
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current)
			}
		}
	}, [])

	return (
		<div className='relative h-full flex flex-col items-center justify-start md:h-[600px] md:w-[350px] mx-auto overflow-auto'>
			<div className='relative w-full h-full'>
				<video
					ref={videoRef}
					src={videoSrc || '/public/AyatUlKursi.mp4'}
					className='w-full h-full md:rounded-lg object-cover md:w-[350px] md:h-[600px]'
					muted={isMuted}
					onTimeUpdate={handleTimeUpdate}
					onClick={handleVideoClick}
				></video>

				<div className='absolute top-4 left-4 flex space-x-4'>
					<div className='border p-2 rounded-full flex '>
						<button
							className='text-white'
							onClick={togglePlayPause}
						>
							{isPlaying ? (
								<Pause className='fill-white' />
							) : (
								<Play className='fill-white' />
							)}
						</button>
					</div>
					<div className='border p-2 rounded-full flex'>
						<button
							className='text-white'
							onClick={toggleMute}
						>
							{isMuted ? (
								<VolumeX className='fill-white' />
							) : (
								<Volume2 className='fill-white' />
							)}
						</button>
					</div>
				</div>

				<div className='absolute bottom-24 left-4 right-4 flex items-center'>
					<input
						type='range'
						className='w-full h-0.5 bg-gray-300 rounded-lg appearance-none cursor-pointer'
						value={progress}
						onChange={handleSeek}
					/>
				</div>
			</div>

			<div className='absolute bottom-28 left-4 md:left-0 md:bottom-6 md:flex md:flex-col md:items-start md:ml-2'>
				<div className='flex items-center gap-4'>
					<img
						src={speakerPhoto}
						alt='Speaker'
						className='w-12 h-12 rounded-lg object-cover'
					/>
					<div>
						<h2 className='text-white text-xs font-bold'>
							{title || 'Untitled Video'}
						</h2>
						<p className='text-gray-300'>{speaker || 'Unknown Speaker'}</p>
					</div>
				</div>
			</div>

			<div className='absolute right-4 bottom-52 space-y-2 md:bottom-8 gap-4 md:space-x-4 md:space-y-0 items-center justify-center flex flex-col text-white'>
				<button className='flex items-center text-white md:bg-primary rounded-full p-2'>
					<Heart className='w-5 h-5' />
				</button>
				<span>Yoqdi</span>
				<button className='flex items-center text-white md:bg-primary rounded-full p-2'>
					<Download className='w-5 h-5' />
				</button>
				<span>Yuklash</span>
				<button className='flex items-center text-white md:bg-primary rounded-full p-2'>
					<Share2 className='w-5 h-5' />
				</button>
				<span>Ulashish</span>
			</div>
		</div>
	)
}

export default Shorts
