import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className='md:w-60'>
			<Link
				href={item.link}
				className='flex flex-col md:flex-row gap-2.5 p-3.5 rounded-lg md:hover:bg-white md:hover:text-primary  md:text-white text-[#2B8B7E] hover:text-white items-center mt-2 px-4'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
