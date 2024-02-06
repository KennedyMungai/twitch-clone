import { User } from '@prisma/client'

type Props = {
	user: User
}

const UserItem = ({ user }: Props) => {
	return <div>UserItem</div>
}

export default UserItem
