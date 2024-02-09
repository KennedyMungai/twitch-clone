'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'

const Actions = () => {
	const [isPending, startTransition] = useTransition()

	const onClick = () => {
		startTransition(() => {
			onFollow('123')
		})
	}

	return (
		<Button variant={'primary'} onClick={onClick} disabled={isPending}>
			Follow
		</Button>
	)
}

export default Actions
