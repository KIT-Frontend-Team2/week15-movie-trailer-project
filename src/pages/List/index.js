import { Container } from '@mui/system'
import styled from 'styled-components'
import CardList from '../../components/Main/list/card-list'

const ListPage = () => {
	return (
		<Wrapper>
			<Container>
				<CardList />
			</Container>
		</Wrapper>
	)
}

export default ListPage

const Wrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 135px);
`
