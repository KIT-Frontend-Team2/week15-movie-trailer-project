import { useSearchKeyWord } from 'hooks/querys/use-main-query'
import UseObserver from 'hooks/use-observer'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import OneCard from './one-card'
import SearchSkeletonPage from '../Skeleton/Search-Skeleton-page'

const CardList = () => {
	const { keyword } = useParams()
	const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useSearchKeyWord(keyword)

	if (!data && isLoading)
		return (
			<div>
				<SearchSkeletonPage />
			</div>
		)
	console.log(data)
	const results = data.pages.flatMap(pageData => pageData.data.results)
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
			<UseObserver
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}
			></UseObserver>
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
