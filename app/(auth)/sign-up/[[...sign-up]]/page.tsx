import { SignUp } from '@clerk/nextjs'

type Props = {}

const SignUpPage = (props: Props) => {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<SignUp />
		</div>
	)
}

export default SignUpPage
