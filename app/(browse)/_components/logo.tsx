import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<div className='hidden lg:flex items-center gap-x-4 hover:opacity-75 transition duration-300 ease-out'>
				<div className='bg-transparent rounded-full p-1'>
					<Image
						src='/logos/twitch_clone_logo.png'
						alt='Twitch Clone Logo'
						alt='logo'
						width={60}
						height={60}
					/>
				</div>
			</div>
		</Link>
	)
}

export default Logo
