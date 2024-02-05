'use client'

import { useSideBar } from '@/store/use-sidebar'

const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSideBar((state) => state)

	const label = collapsed ? 'Expand' : 'Collapse'

	return (
		<>
			{!collapsed && (
				<div className='p-3 pl-6 mb-2 flex items-center w-full'>
					<p className='font-semibold text-primary'>For You</p>
				</div>
			)}
		</>
	)
}

export default Toggle
