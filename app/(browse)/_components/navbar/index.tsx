import Logo from '@/app/(auth)/_components/logo'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
	return <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
        <Logo />
    </nav>
}

export default NavBar
