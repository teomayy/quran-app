'use client'

import Link from 'next/link'

import { DayVerse } from './DayVerse'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	const menuItems = MENU()
	return (
		<aside className='z-10 md:h-full bg-sidebar flex flex-col justify-between fixed md:static bottom-0 w-full'>
			<div>
				<div className='text-white  md:w-80 md:rounded-lg bg-primary'>
					<Link
						href='/i'
						className='md:flex items-center p-4 hidden'
					>
						<span className='text-2xl font-bold relative'>
							Quran.app
							<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
								beta
							</span>
						</span>
					</Link>
					<div className='md:p-3 flex flex-row md:flex-col justify-center'>
						{menuItems.map(item => (
							<MenuItem
								item={item}
								key={item.link}
							/>
						))}
					</div>
				</div>
				<div className='hidden md:block'>
					<DayVerse />
				</div>
			</div>
		</aside>
	)
}
