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

	return <div>UserPage</div>
}

export default UserPage
