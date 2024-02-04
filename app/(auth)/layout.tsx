import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
	return (
		<div className='flex min-h-screen justify-center items-center'>
			{children}
		</div>
	)
}

export default AuthLayout
