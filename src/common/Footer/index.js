import Box from '@mui/material/Box'
import styled from 'styled-components'
import UserProfile from './UserProfile'

const Footer = () => {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '75px',
					backgroundColor: '#F1404B',
					zIndex: 10,
				}}
			>
				<S.InnerBox>
					<UserProfile gitID={'101887549'} name={'Peter'} />
					<UserProfile gitID={'123462812'} name={'Jung Ji Hyune'} />
					<UserProfile gitID={'115636461'} name={'Ji Hyeong Lee'} />
					<UserProfile gitID={'11881721'} name={'naturej'} />
					<UserProfile gitID={'130757302'} name={'uniend'} />
				</S.InnerBox>
			</Box>
		</>
	)
}

export default Footer

const InnerBox = styled.div`
	display: flex;
	padding: 10px;
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
