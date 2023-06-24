import { Container } from '@mui/system'
import CardList from 'components/Search/list/card-list'
import styled from 'styled-components'

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
