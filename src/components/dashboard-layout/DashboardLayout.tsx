import { PropsWithChildren } from 'react'

import { Navbar } from './navbar/Navbar'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid md:p-1 min-h-screen 2xl:grid-cols-[1.1fr-6fr] md:grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='overflow-x-hidden h-screen relative overflow-y-auto'>
				<Navbar />
				{children}
			</main>
			\
		</div>
	)
}
