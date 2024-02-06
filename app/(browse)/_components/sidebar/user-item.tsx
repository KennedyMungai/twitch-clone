'use client'

import { User } from '@prisma/client'

type Props = {
	user: User
}

const UserItem = ({ user }: Props) => {
	return <div>{user.username}</div>
}

export default UserItem
