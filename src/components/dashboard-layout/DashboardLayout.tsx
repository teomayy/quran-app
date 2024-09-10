import { PropsWithChildren } from 'react'

import { Navbar } from './navbar/Navbar'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid p-4 min-h-screen 2xl:grid-cols-[1.1fr-6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />

			<main className='p-pig-layout overflow-x-hidden max-h-screen relative'>
				<Navbar />
				{children}
			</main>
		</div>
	)
}
