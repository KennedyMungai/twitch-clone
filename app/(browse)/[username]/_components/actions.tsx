'use client'

import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'

type Props = {}

const Actions = (props: Props) => {
	const onClick = () => {
		onFollow('123')
	}

	return (
		<Button variant={'primary'} onClick={onClick}>
			Follow
		</Button>
	)
}

export default Actions
