import Box from '@mui/material/Box'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { useSetRecoilState } from 'recoil'
import { toggleUiAtom } from 'atom/ui.atom'

const Header = () => {
	const setToggle = useSetRecoilState(toggleUiAtom)
	const ToggleHandling = () => {
		setToggle(prev => !prev)
	}
	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					width: '100%',
					height: '50px',
					backgroundColor: '#F1404B',
					zIndex: 10,
				}}
			>
				<Box
					sx={{
						width: 200,
						height: '50px',
						backgroundColor: '#F1404B',
					}}
				>
					<S.InnerBox onClick={ToggleHandling}>
						<MenuIcon sx={{ color: 'white' }} />
						<S.MenuButton>MENU</S.MenuButton>
					</S.InnerBox>
				</Box>
			</Box>
		</>
	)
}

export default Header

const InnerBox = styled.div`
	display: flex;
	line-height: 50px;
	align-items: center;
	justify-content: center;
`

const MenuButton = styled.div`
	color: white;
`

const S = {
	InnerBox,
	MenuButton,
}
