import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Wrapper = ({ children }: Props) => {
	return (
		<aside className='fixed top-20 left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50'>
			{children}
		</aside>
	)
}

export default Wrapper
