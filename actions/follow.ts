'use server'

export const onFollow = async (id: string) => {
	try {
		console.log('I am the same as an API call')
	} catch (error) {
		throw new Error('Internal Error')
	}
}
