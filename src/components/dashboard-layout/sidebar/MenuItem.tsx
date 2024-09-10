import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className='w-60'>
			<Link
				href={item.link}
				className='flex gap-2.5 p-3.5 rounded-lg hover:bg-white hover:text-primary items-center mt-2 px-layout'
			>
				<item.icon className='text-[#2B8B7E]' />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
