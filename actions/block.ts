import { blockUser } from '@/lib/block-service'
import { revalidatePath } from 'next/cache'

export const onBlock = async (id: string) => {
	const blockedUser = await blockUser(id)

	revalidatePath('/')

	if (blockedUser) {
		revalidatePath(`${blockedUser.blocking.username}`)
	}

	return blockUser
}
