'use client'

import { cn } from '@/lib/utils'
import { useSideBar } from '@/store/use-sidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Container = ({ children }: Props) => {
	const { collapsed } = useSideBar((state) => state)

	return (
		<div
			className={cn(
				'flex-1',
				collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60'
			)}
		>
			{children}
		</div>
	)
}

export default Container
