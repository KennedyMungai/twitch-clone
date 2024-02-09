'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

type Props = {
	isFollowing: boolean
	userId: string
}

const Actions = ({ isFollowing, userId }: Props) => {
	const [isPending, startTransition] = useTransition()

	const onClick = () => {
		startTransition(() => {
			onFollow(userId)
				.then((data) =>
					toast.success(
						`You are now following ${data.following.username}`
					)
				)
				.catch(() => toast.error('Something Went Wrong'))
		})
	}

	return (
		<Button
			variant={'primary'}
			onClick={onClick}
			disabled={isPending || isFollowing}
		>
			Follow
		</Button>
	)
}

export default Actions
