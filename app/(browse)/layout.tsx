import { ReactNode, Suspense } from 'react'
import Container from './_components/container'
import NavBar from './_components/navbar'
import SideBar, { SideBarSkeleton } from './_components/sidebar'

type Props = {
	children: ReactNode
}

const BrowseLayout = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			<div className='flex h-full pt-20'>
				<Suspense fallback={<SideBarSkeleton />}>
					<SideBar />
				</Suspense>
				<Container>{children}</Container>
			</div>
		</>
	)
}

export default BrowseLayout
