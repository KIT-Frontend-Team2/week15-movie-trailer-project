import Box from '@mui/material/Box'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { useSetRecoilState } from 'recoil'
import { toggleUiAtom } from 'atom/ui.atom'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
const Header = () => {
	const setToggle = useSetRecoilState(toggleUiAtom)
	const navigate = useNavigate()
	const inputRef = useRef('')
	const ToggleHandling = () => {
		setToggle(prev => !prev)
	}


	const searchKeyword = (e) => {
		e.preventDefault();
		const keyWord = inputRef.current.value
		navigate('/search/' + keyWord)
	}
	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					width: '100%',
					height: '50px',
					backgroundColor: '#F1404B',
					display: 'flex',
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
				<SearchContainer onSubmit={searchKeyword}>
					<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
						<SearchIcon />
					</IconButton>
					<SearchBox>
						<SearchBar ref={inputRef} type="text" />
					</SearchBox>
				</SearchContainer>
			</Box>
		</>
	)
}

export default Header

const SearchContainer = styled.form`
	display: flex;
	align-items: center;
`

const SearchBar = styled.input`
	background-color: inherit;
	border: none;
	outline: none;
`

const SearchBox = styled.div`
	padding: 5px;
	border: 1px solid black;
`

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
