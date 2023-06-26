import { Container } from '@mui/system'
import styled from 'styled-components'
import CardList from '../../components/Search/list/card-list'

const SearchPage = () => {
	return (
		<Wrapper>
			<Container>
				<CardList />
			</Container>
		</Wrapper>
	)
}

export default SearchPage

const Wrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 135px);
`
