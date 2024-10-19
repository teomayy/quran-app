interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<div className='md:bg-white p-2 rounded-lg'>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<div className='mg:my-3 h-0.5 bg-border w-full ' />
		</div>
	)
}
