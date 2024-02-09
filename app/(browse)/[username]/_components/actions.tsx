'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'

type Props = {
	isFollowing: boolean
}

const Actions = ({ isFollowing }: Props) => {
	const [isPending, startTransition] = useTransition()

	const onClick = () => {
		startTransition(() => {
			onFollow('123')
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
