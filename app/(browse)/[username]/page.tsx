import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'

type Props = {
	params: {
		username: string
	}
}

const UserPage = async ({ params: { username } }: Props) => {
	const user = await getUserByUsername(username)

	if (!user) notFound()

	return (
		<div className='flex flex-col gap-y-4'>
			<p>username: {user.username}</p>
			<p>User ID: {user.id}</p>
		</div>
	)
}

export default UserPage
