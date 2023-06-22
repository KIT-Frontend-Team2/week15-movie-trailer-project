import Box from '@mui/material/Box'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { useSetRecoilState } from 'recoil'
import { toggleUiAtom } from 'atom/ui.atom'
import { useNavigate } from 'react-router'

const Header = () => {
	const setToggle = useSetRecoilState(toggleUiAtom)
	const navigate = useNavigate()
	const RootMove = () => {
		navigate('/')
	}
	const ToggleHandling = () => {
		setToggle(prev => !prev)
	}
	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					width: '100%',
					height: '45px',
					backgroundColor: '#F1404B',
				}}
			>
				<Box
					sx={{
						width: 200,
						height: '45px',
						backgroundColor: '#F1404B',
					}}
				>
					{/* 
						@TODO 
						white color 변환 필요 
						*/}
					<S.InnerBox >
						<MenuIcon onClick={ToggleHandling} sx={{ color: 'white' }} />
						<S.MenuButton onClick={RootMove}>
							MENU
						</S.MenuButton>
					</S.InnerBox>
				</Box>
			</Box>
		</>
	)
}

export default Header

const InnerBox = styled.div`
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: center
`

const MenuButton = styled.div`
	color: white;
`

const S = {
	InnerBox, MenuButton
}
