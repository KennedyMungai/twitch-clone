'use client'

import { useSideBar } from '@/store/use-sidebar'
import { Follow, User } from '@prisma/client'
import UserItem from './user-item'

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
			<ul className='space-y-2 px-2'>
				{data.map((follow, index) => (
					<UserItem
						key={index}
						userName={follow.following.username}
						imageUrl={follow.following.imageUrl}
                        isLive={false}
					/>
				))}
			</ul>
		</div>
	)
}

export default Following
