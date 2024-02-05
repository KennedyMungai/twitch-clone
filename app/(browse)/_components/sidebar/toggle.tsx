'use client'

import { Button } from '@/components/ui/button'
import { useSideBar } from '@/store/use-sidebar'
import { ArrowLeftFromLine } from 'lucide-react'

const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSideBar((state) => state)

	const label = collapsed ? 'Expand' : 'Collapse'

	return (
		<>
			{!collapsed && (
				<div className='p-3 pl-6 mb-2 flex items-center w-full'>
					<p className='font-semibold text-primary'>For You</p>
					<Button
						className='h-auto p-2 ml-auto'
						variant={'ghost'}
						onClick={onCollapse}
					>
						<ArrowLeftFromLine className='h-4 w-4' />
					</Button>
				</div>
			)}
		</>
	)
}

export default Toggle
