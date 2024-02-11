'use client'

import { useSideBar } from '@/store/use-sidebar'
import { Follow, User } from '@prisma/client'

type Props = {
	data: (Follow & { following: User })[]
}

const Following = ({ data }: Props) => {
	const { collapsed } = useSideBar((state) => state)

	if (!data.length) {
		return null
	}

	return (
		<div>
			{!collapsed && (
				<div className='pl-6 mb-4'>
					<p className='text-sm text-muted-foreground'>Following</p>
				</div>
			)}
		</div>
	)
}

export default Following
