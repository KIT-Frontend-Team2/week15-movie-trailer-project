import { toggleUiAtom } from 'atom/ui.atom'
import Footer from 'common/Footer'
import Header from 'common/Header'
import ToolBar from 'common/ToolBar'
import ScrollUp from 'components/Main/scroll/scrollUp'
import useDetailLocation from 'hooks/use-detail-location'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const Layout = () => {
	const showToggle = useRecoilValue(toggleUiAtom)
	const navigate = useNavigate()
	const isDetail = useDetailLocation()
	return (
		<S.Wrapper>
			<Header />
			<ToolBar />
			<S.Container>
				<S.Box isDetail={isDetail} showToggle={showToggle}>
					<Outlet />
				</S.Box>
			</S.Container>
			<ScrollUp />
			<Footer />
		</S.Wrapper>
	)
}

export default Layout

const Wrapper = styled.div`
	overflow: hidden;
`

const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: #252c41;
`
const Box = styled.div`
	padding-top: ${({ isDetail }) => (isDetail ? '0' : '60px')};
	margin-left: ${({ showToggle }) => (showToggle ? '200px' : '0px')};
	transition: 1s;
	color: white;
`

const S = { Wrapper, Container, Box }
