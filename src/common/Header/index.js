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
		<HeaderBox>
			<Box
				sx={{
					width: '100%',
					height: '45',
					backgroundColor: 'error.light',
				}}
			>
				<Box
					sx={{
						width: 200,
						backgroundColor: 'error.main',
						'&:hover': {
							backgroundColor: 'error.main',
							opacity: [0.9, 0.8, 0.7],
						},
					}}
				>
					{/* 
						@TODO 
						white color 변환 필요 
						*/}
					<InnerBox onClick={ToggleHandling}>
						<MenuIcon />
						Menu
					</InnerBox>
				</Box>
			</Box>
		</HeaderBox>
	)
}

export default Header

const HeaderBox = styled.header``
const InnerBox = styled.div`
	display: flex;
	padding: 10px;
`
