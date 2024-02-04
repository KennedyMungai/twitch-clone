import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const BrowseLayout = ({ children }: Props) => {
	return (
		<>
            <NavBar />
			<div className='flex h-full pt-20'>{children}</div>
		</>
	)
}

export default BrowseLayout
