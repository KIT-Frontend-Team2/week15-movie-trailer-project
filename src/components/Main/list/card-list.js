import { selectApiTypeAtom } from 'atom/ui.atom'
import { useGetList } from 'hooks/querys/use-main-query'
import { useRecoilValue } from 'recoil'
import MainBanner from '../renderbanner/MainBanner'
import OneCard from './one-card'
import { Box, Grid } from '@mui/material'
import randomArray from 'utils/random-array-index-helper'
import { useNavigate } from 'react-router-dom'
import API_KEYWORD from 'consts/apiKeyword'
import { useEffect } from 'react'

const CardList = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate(API_KEYWORD.POPULAR)
	}, [])

	const selectApiKeyword = useRecoilValue(selectApiTypeAtom)
	const { data, isLoading } = useGetList(selectApiKeyword)
	if (isLoading && !data) return <div>로딩중</div>
	if (error) return <div>error</div>
	const list = data.data.results
	const slideCount = 5
	const posters = randomArray(list, slideCount)
	return (
		<>
			<MainBanner posters={posters} />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container columns={{ xs: 4 }}>
					{data.data.results.map(list => {
						return (
							<Grid key={list.id} item xs={1} sx={{ padding: '20px' }}>
								<OneCard
									id={list.id}
									title={list.original_title}
									poster_path={list.poster_path}
									vote_average={list.vote_average}
									overview={list.overview}
								/>
							</Grid>
						)
					})}
				</Grid>
			</Box>
		</>
	)
}

export default CardList
