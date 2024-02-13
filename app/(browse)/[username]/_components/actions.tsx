'use client'

import { onFollow, onUnFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

type Props = {
	isFollowing: boolean
	userId: string
}

const Actions = ({ isFollowing, userId }: Props) => {
	const [isPending, startTransition] = useTransition()

	const handleFollow = () => {
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

	const handleUnfollow = () => {
		startTransition(() => {
			onUnFollow(userId)
				.then((data) =>
					toast.success(
						`You have unfollowed ${data.following.username}`
					)
				)
				.catch(() => toast.error('Something Went Wrong'))
		})
	}

	const onClick = () => {
		isFollowing ? handleUnfollow : handleFollow
	}

	return (
		<>
			<Button variant={'primary'} onClick={onClick} disabled={isPending}>
				{isFollowing ? 'Unfollow' : 'Follow'}
			</Button>
			<Button>Block</Button>
		</>
	)
}

export default Actions
