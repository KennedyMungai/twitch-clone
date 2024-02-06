'use client'

import { cn } from '@/lib/utils'
import { useSideBar } from '@/store/use-sidebar'
import { ReactNode, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
	children: ReactNode
}

const Container = ({ children }: Props) => {
	const { collapsed, onCollapse, onExpand } = useSideBar((state) => state)
	const matches = useMediaQuery('(max-width: 1024px)')

	useEffect(() => {
		if (matches) {
			onCollapse()
		} else {
			onExpand()
		}
	}, [matches, onCollapse, onExpand])

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
