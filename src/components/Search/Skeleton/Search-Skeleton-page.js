import styled from 'styled-components'
import { Skeleton } from '@mui/material'

const SekeletonCardList = () => {
	const mock = new Array(8).fill()
	return (
		<>
			<S.Title>
				<Skeleton variant="rectangular" height={80} sx={{ margin: '10px' }} />
			</S.Title>
			<S.CardLists>
				{mock.map(data => (
					<Skeleton variant="rectangular" height={350} />
				))}
			</S.CardLists>
		</>
	)
}

export default SekeletonCardList

const Title = styled.h5`
	font-size: 32px;
	font-weight: bold;
	text-align: center;
	padding: 20px 20px 0 20px;
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
