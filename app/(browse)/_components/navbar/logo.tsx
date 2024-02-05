import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<div className='flex items-center gap-x-4 hover:opacity-75 transition duration-300 ease-out'>
				<div className='bg-transparent rounded-full p-1'>
					<Image
						src='/logos/twitch_clone_logo.png'
						alt='Twitch Clone Logo'
						width={60}
						height={60}
					/>
				</div>
				<div className='hidden lg:flex flex-col'>
					<p className='text-lg font-semibold'>Twitch Clone</p>
					<p className='text-xs text-muted-foreground'>
						Let&apos;s Play
					</p>
				</div>
			</div>
		</Link>
	)
}

export default Logo
