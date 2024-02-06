'use client'

type Props = {
	userName: string
	imageUrl: string
	isLive?: boolean
}

const UserItem = ({ userName, imageUrl, isLive }: Props) => {
	return <div>{userName}</div>
}

export default UserItem
