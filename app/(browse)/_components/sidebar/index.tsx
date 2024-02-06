import Recommended from './recommended'
import Toggle from './toggle'
import Wrapper from './wrapper'

type Props = {}

const SideBar = async (props: Props) => {
	return (
		<Wrapper>
			<Toggle />
			<div className="space-y-4 pt-4 lg:pt-0">
				<Recommended />
			</div>
		</Wrapper>
	)
}

export default SideBar
