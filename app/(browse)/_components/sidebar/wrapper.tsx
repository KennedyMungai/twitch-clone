'use client'

import { cn } from '@/lib/utils'
import { useSideBar } from '@/store/use-sidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Wrapper = ({ children }: Props) => {
	const { collapsed } = useSideBar((state) => state)

	return (
		<aside
			className={cn(
				'fixed top-20 left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50',
				collapsed && 'w-[70px]'
			)}
		>
			{children}
		</aside>
	)
}

export default Wrapper
