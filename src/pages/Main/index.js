import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

const MainPage = () => {
	const { MainId } = useParams()

	console.log({ MainId })
	return (
		<Container>
			<div>메인페이지입니다. </div>
		</Container>
	)
}

export default MainPage
