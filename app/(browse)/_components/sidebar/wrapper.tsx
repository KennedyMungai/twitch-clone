import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Wrapper = ({ children }: Props) => {
	return <aside>{children}</aside>
}

export default Wrapper
