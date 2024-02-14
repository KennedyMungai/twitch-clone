import { getSelfByUsername } from '@/lib/auth-service'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
	params: {
		username: string
	}
	children: ReactNode
}

const CreatorLayout = async ({ params: { username }, children }: Props) => {
	const self = await getSelfByUsername(username)

	if (!self) {
		redirect('/')
	}

	return (
		<>
			<div className='flex h-full pt-20'>{children}</div>
		</>
	)
}

export default CreatorLayout
