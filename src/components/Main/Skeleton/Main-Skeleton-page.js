import { Box, Grid, Skeleton } from '@mui/material'
import { useDevice } from '../../../hooks/use-device'

const SkeletonCardList = () => {
	const { isDesktop, isMobile, isTablet } = useDevice()
	const mock = new Array(20).fill()
	return (
		<>
			{/* 슬라이드 배너 */}
			{!isMobile && (
				<Skeleton
					variant="rectangular"
					height={350}
					sx={{ margin: '0 auto', marginLeft: '20px' }}
				/>
			)}
			<Box sx={{ flexGrow: 1 }}>
				<Grid container columns={{ xs: isMobile ? 1 : isTablet ? 3 : 4 }}>
					{mock.map((_, index) => {
						return (
							<Grid key={index} item xs={1} sx={{ padding: '20px 0 0 20px' }}>
								<Skeleton variant="rectangular" height={380} />
							</Grid>
						)
					})}
				</Grid>
			</Box>
		</>
	)
}

export default SkeletonCardList
