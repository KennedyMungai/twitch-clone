import { getSelf } from './auth-service'
import { db } from './db'

export const getRecommended = async () => {
	let userId

	try {
		const self = await getSelf()
		userId = self.id
	} catch (error) {
		userId = null
	}

	const users = await db.user.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})

	return users
}
