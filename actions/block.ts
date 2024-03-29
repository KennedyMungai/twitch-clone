'use server'

import { blockUser, unblockUser } from '@/lib/block-service'
import { revalidatePath } from 'next/cache'

export const onBlock = async (id: string) => {
	const blockedUser = await blockUser(id)

	revalidatePath('/')

	if (blockedUser) {
		revalidatePath(`${blockedUser.blocking.username}`)
	}

	return blockUser
}

export const onUnblock = async (id: string) => {
	const unblockedUser = await unblockUser(id)

	revalidatePath('/')

	if (unblockedUser) revalidatePath(`/${unblockedUser.blocking.username}`)

	return unblockedUser
}
