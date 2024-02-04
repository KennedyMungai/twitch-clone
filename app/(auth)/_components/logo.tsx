import Image from 'next/image'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='bg-[#252731] rounded-full p-1'>
				<Image
					src='/logos/twitch_clone_logo.png'
					alt='Twitch clone logo'
					height={80}
					width={80}
				/>
			</div>
		</div>
	)
}

export default Logo
