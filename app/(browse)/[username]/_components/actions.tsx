'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

type Props = {
	isFollowing: boolean
}

const Actions = ({ isFollowing }: Props) => {
	const [isPending, startTransition] = useTransition()

	const onClick = () => {
		startTransition(() => {
			onFollow('123')
				.then(() => toast.success('Followed the user'))
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
