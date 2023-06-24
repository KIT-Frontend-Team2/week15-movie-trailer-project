import { Container } from '@mui/system'
import CardList from 'components/Main/list/card-list'
import ScrollUp from 'components/Main/scroll/scrollUp'

const MainPage = () => {
	return (
		<Container>
			<CardList />
			<ScrollUp />
		</Container>
	)
}

export default MainPage
