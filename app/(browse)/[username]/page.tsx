import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import Actions from './_components/actions'

type Props = {
	params: {
		username: string
	}
}

const UserPage = async ({ params: { username } }: Props) => {
	const user = await getUserByUsername(username)

	if (!user) notFound()

	const isFollowing = await isFollowingUser(user.id)

	return (
		<div className='flex flex-col gap-y-4'>
			<p>username: {user.username}</p>
			<p>User ID: {user.id}</p>
			<p>isFollowing: {`${isFollowing}`}</p>
			<Actions />
		</div>
	)
}

export default UserPage
