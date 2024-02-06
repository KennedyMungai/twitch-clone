import { ReactNode } from 'react'
import Container from './_components/container'
import NavBar from './_components/navbar'
import SideBar from './_components/sidebar'

type Props = {
	children: ReactNode
}

const BrowseLayout = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			<SideBar />
			<Container>{children}</Container>
		</>
	)
}

export default BrowseLayout
