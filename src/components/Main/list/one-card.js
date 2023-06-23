import { Card, CardMedia, Chip, Rating } from '@mui/material'
import TMDB_URL from 'consts/tmdbUrl'
import StarIcon from '@mui/icons-material/Star'
import styled from 'styled-components'
import useDetailNavigate from 'hooks/use-detail-navigate'

const OneCard = ({ id, title, poster_path, vote_average, overview }) => {
	const navigate = useDetailNavigate()
	const url = TMDB_URL + poster_path
	return (
		<Card
			onClick={() => navigate(id)}
			sx={{ minWidth: 150, overflow: 'initial' }}
		>
			<CardInner>
				<Chip
					label={
						<Rating
							name="read-only"
							value={vote_average / 2}
							readOnly
							emptyIcon={
								<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
							}
						/>
					}
					sx={{
						zIndex: 8,
						position: 'absolute',
						background: 'white',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
					variant="outlined"
				/>
				<CardBox>
					<CardMedia component="img" image={url} />
				</CardBox>
				<HoverIntroduce className="hoverComponent">
					<IntroduceTitle>{title}</IntroduceTitle>
					<IntroduceOverview>{overview}</IntroduceOverview>
				</HoverIntroduce>
			</CardInner>
		</Card>
	)
}

export default OneCard

const HoverIntroduce = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	padding: 20px;
	position: absolute;
	color: white;
	z-index: 7;
	background-color: rgba(255, 0, 0, 0.4);
	top: 0;
	transition: opacity 0.5s;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const IntroduceTitle = styled.h5`
	font-size: 20px;
`

const IntroduceOverview = styled.span`
	white-space: nowrap;
	overflow: hidden;
	margin-top: 10px;
	text-overflow: ellipsis;
`

const CardBox = styled.div`
	overflow: hidden;
`

const CardInner = styled.div`
	position: relative;
	overflow: initial;
	cursor: pointer;

	img {
		transition: 1s;
	}

	:hover {
		.hoverComponent {
			opacity: 1;
		}
		img {
			transform: scale(1.1);
		}
	}
`
