<<<<<<< HEAD
import API_KEYWORD from 'consts/apiKeyword'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate(API_KEYWORD.POPULAR)
	}, [])
=======
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
>>>>>>> a9e34940ce0088c2cb1b655acde9513e6ef5e4c9
}

export default MainPage
