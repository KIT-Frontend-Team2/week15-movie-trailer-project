import { Box } from '@mui/material'
import { selectApiTypeAtom, toggleUiAtom } from 'atom/ui.atom'
import API_KEYWORD from 'consts/apiKeyword'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'

const ToolBar = () => {
	const showToggle = useRecoilValue(toggleUiAtom)
	const [selectType, setSelectType] = useRecoilState(selectApiTypeAtom)

	const TypeHandling = (API_KEY) => {
		setSelectType(API_KEY);
	}
	return (
		<>
			<Box
				sx={{
					marginTop: '45px',
					display: 'block',
					position: 'fixed',
					width: showToggle ? 200 : 0,
					overflow: 'hidden',
					height: '100vh',
					backgroundColor: '#1A1C20',
					transition: 'width 1s',
				}}
			>
				<S.Container >
					<Box onClick={() => TypeHandling(API_KEYWORD.NOW_PLAYING)} sx={{
						width: '100%', display: 'flex', justifyContent: 'center', height: 40, padding: '10px 0 10px 0', color: selectType === API_KEYWORD.NOW_PLAYING && '#C2626C', backgroundColor: selectType === API_KEYWORD.NOW_PLAYING && '#222A31', '&:hover': {
							backgroundColor: '#1A1C20',
							opacity: [0.9, 0.8, 0.7],
						},
					}}>NOW_PLAYING</Box>
					<Box onClick={() => TypeHandling(API_KEYWORD.POPULAR)} sx={{
						width: '100%', display: 'flex', justifyContent: 'center', height: 40, padding: '10px 0 10px 0', color: selectType === API_KEYWORD.POPULAR && '#C2626C', backgroundColor: selectType === API_KEYWORD.POPULAR && '#222A31', '&:hover': {
							backgroundColor: '#1A1C20',
							opacity: [0.9, 0.8, 0.7],
						},
					}}>POPULAR</Box>
					<Box onClick={() => TypeHandling(API_KEYWORD.TOP_RATED)} sx={{
						width: '100%', display: 'flex', justifyContent: 'center', height: 40, padding: '10px 0 10px 0', color: selectType === API_KEYWORD.TOP_RATED && '#C2626C', backgroundColor: selectType === API_KEYWORD.TOP_RATED && '#222A31', '&:hover': {
							backgroundColor: '#1A1C20',
							opacity: [0.9, 0.8, 0.7],
						},
					}}>TOP_RATED</Box>
					<Box onClick={() => TypeHandling(API_KEYWORD.UP_COMING)} sx={{
						width: '100%', display: 'flex', justifyContent: 'center', height: 40, padding: '10px 0 10px 0', color: selectType === API_KEYWORD.UP_COMING && '#C2626C', backgroundColor: selectType === API_KEYWORD.UP_COMING && '#222A31', '&:hover': {
							backgroundColor: '#1A1C20',
							opacity: [0.9, 0.8, 0.7],
						},
					}}>UP_COMING</Box>
				</S.Container>
			</Box>
		</>
	)
}

export default ToolBar

const Container = styled.div`
color: white;
display: flex;
flex-direction: column;
margin-top: 100px;
gap: 10px;
`

const S = {
	Container
}