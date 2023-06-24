import { Container } from '@mui/system'
import { useSearchKeyWord } from 'hooks/querys/use-main-query'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
	const { keyword } = useParams()
	const { data } = useSearchKeyWord(keyword)

	console.log(data)
	return <Container></Container>
}

export default SearchPage
