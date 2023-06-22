import { Box } from '@mui/material'
import { toggleUiAtom } from 'atom/ui.atom'
import { useRecoilValue } from 'recoil'

const ToolBar = () => {
	const showToggle = useRecoilValue(toggleUiAtom)
	return (
		<>
			<Box
				sx={{
					display: 'block',
					position: 'fixed',
					width: showToggle ? 200 : 0,
					overflow: 'hidden',
					height: '100vh',
					backgroundColor: 'common.black',
					transition: '1s',
				}}
			>
				<div style={{ color: 'white' }}>ddd</div>
			</Box>
		</>
	)
}

export default ToolBar
