import { isBlockedByUser } from '@/lib/block-service'
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
	const isBlocked = await isBlockedByUser(user.id)

	if (isBlocked) {
		notFound()
	}

	return (
		<div className='flex flex-col gap-y-4'>
			<p>username: {user.username}</p>
			<p>User ID: {user.id}</p>
			<p>Is Following: {`${isFollowing}`}</p>
			<p>Is Blocked by this UserButton: {`${isBlocked}`}</p>
			<Actions isFollowing={isFollowing} userId={user.id} />
		</div>
	)
}

export default UserPage
