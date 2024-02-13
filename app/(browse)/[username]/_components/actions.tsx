'use client'

import { onBlock } from '@/actions/block'
import { onFollow, onUnFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { blockUser } from '../../../../lib/block-service'

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

	const handleBlock = () => {
		startTransition(() => {
			onBlock(userId)
				.then((data) =>
					toast.success(`Blocked the user ${data.blocking.username}`)
				)
				.catch(() => toast.error('Something went wrong'))
		})
	}

	return (
		<>
			<Button variant={'primary'} onClick={onClick} disabled={isPending}>
				{isFollowing ? 'Unfollow' : 'Follow'}
			</Button>
			<Button onClick={handleBlock} disabled={isPending}>
				Block
			</Button>
		</>
	)
}

export default Actions
