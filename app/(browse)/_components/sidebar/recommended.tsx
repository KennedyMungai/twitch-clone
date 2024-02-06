'use client'
import { useSideBar } from '@/store/use-sidebar'
import { User } from '@prisma/client'
import UserItem, { UserItemSkeleton } from './user-item'

type Props = {
	data: User[]
}

const Recommended = ({ data }: Props) => {
	const { collapsed } = useSideBar((state) => state)
	const showLabel = !collapsed && data.length > 0

	return (
		<div>
			{showLabel && (
				<div className='pl-6 mb-4'>
					<p className='text-sm text-muted-foreground'>Recommended</p>
				</div>
			)}
			<ul className='space-y-2 px-2'>
				{data.map((user, index) => (
					<UserItem
						key={index}
						userName={user.username}
						imageUrl={user.image}
						isLive={true}
					/>
				))}
			</ul>
		</div>
	)
}

export default Recommended

export const RecommendedSkeleton = () => {
	return (
		<ul className='px-2'>
			{[...Array(3)].map((_, i) => (
				<UserItemSkeleton key={i} />
			))}
		</ul>
	)
}
