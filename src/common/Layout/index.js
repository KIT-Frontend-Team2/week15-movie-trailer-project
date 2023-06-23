import { toggleUiAtom } from 'atom/ui.atom'
import Footer from 'common/Footer'
import Header from 'common/Header'
import ToolBar from 'common/ToolBar'
import API_KEYWORD from 'consts/apiKeyword'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const { Outlet, useNavigate } = require('react-router-dom')

const Layout = () => {
	const showToggle = useRecoilValue(toggleUiAtom)
	const navigate = useNavigate()

	useEffect(() => {
		navigate(API_KEYWORD.POPULAR)
	}, [])
	return (
		<>
			<Header />
			<ToolBar />
			<S.Wrapper>
				<S.Box showToggle={showToggle}>
					<Outlet />
				</S.Box>
			</S.Wrapper>
			<Footer />
		</>
	)
}

export default Layout

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: #252c41;
`
const Box = styled.div`
	padding-top: 60px;
	margin-left: ${({ showToggle }) => (showToggle ? '200px' : '0px')};
	transition: 1s;
	color: white;
`

const S = { Wrapper, Box }
