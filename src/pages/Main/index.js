import { useParams } from 'react-router-dom'

const MainPage = () => {
	const { MainId } = useParams()

	console.log({ MainId })
	return (
		<>
			<div>메인페이지입니다. </div>
		</>
	)
}

export default MainPage
