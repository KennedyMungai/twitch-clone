import { SignIn } from '@clerk/nextjs'

type Props = {}

const SignInPage = (props: Props) => {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<SignIn />
		</div>
	)
}

export default SignInPage
