import { ReactNode } from 'react'
import NavBar from './_components/navbar'

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
