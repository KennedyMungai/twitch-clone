'use client'
import { useSideBar } from '@/store/use-sidebar'
import { User } from '@prisma/client'

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
					<UserItem />
				))}
			</ul>
		</div>
	)
}

export default Recommended
