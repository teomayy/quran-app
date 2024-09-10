'use client'

import Link from 'next/link'

import { DayVerse } from './DayVerse'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	const menuItems = MENU()
	return (
		<aside className='h-full bg-sidebar flex flex-col gap-2 justify-between'>
			<div>
				<div className='text-white w-80  rounded-lg bg-primary'>
					<Link
						href='/i'
						className='flex items-center p-layout '
					>
						<span className='text-2xl font-bold relative'>
							Quran.app
							<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
								beta
							</span>
						</span>
					</Link>
					<div className='p-3 relative'>
						{menuItems.map(item => (
							<MenuItem
								item={item}
								key={item.link}
							/>
						))}
					</div>
				</div>
				<DayVerse />
			</div>
		</aside>
	)
}
