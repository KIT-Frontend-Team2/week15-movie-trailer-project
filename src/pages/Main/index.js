import API_KEYWORD from 'consts/apiKeyword'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import CardList from 'components/Main/list/card-list'
const MainPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate(API_KEYWORD.POPULAR)
	}, [])

	return (
		<Container>
			<CardList />
		</Container>
	)
}
export default MainPage
