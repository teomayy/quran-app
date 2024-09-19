import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	if (typeof window === 'undefined') {
		return null
	}

	const pathname = usePathname()
	let isActive = pathname === item.link

	return (
		<div className='md:w-full'>
			<Link
				href={item.link}
				className={`flex flex-col md:flex-row gap-2.5 p-3.5 rounded-lg md:hover:bg-white md:hover:text-primary   text-[#2B8B7E] hover:text-white items-center mt-2 px-4 ${isActive ? 'text-white' : ''} ${isActive ? 'md:bg-white' : ''} ${isActive ? 'md:text-primary' : ''} `}
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
