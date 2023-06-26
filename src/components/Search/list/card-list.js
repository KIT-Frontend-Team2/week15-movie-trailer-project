import { useSearchKeyWord } from 'hooks/querys/use-main-query'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import OneCard from './one-card'

const CardList = () => {
	const { keyword } = useParams()
	const { data, isLoading } = useSearchKeyWord(keyword)

	if (!data) return <div>로딩중</div>
	console.log(data)
	const { results } = data.data
	return (
		<>
			<S.Title>
				{results.length !== 0
					? `This is the search result of the "${keyword}".`
					: `No results were found for "${keyword}"`}
			</S.Title>
			<S.CardLists>
				{results.map(data => (
					<OneCard key={data.id} data={data} />
				))}
			</S.CardLists>
		</>
	)
}

export default CardList

const Title = styled.h5`
	font-size: 32px;
	font-weight: bold;
	text-align: center;
	padding: 20px;
`
const CardLists = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 30px;
`

const S = {
	Title,
	CardLists,
}
