import { Container } from '@mui/material'
import TMDB_URL from 'consts/tmdbUrl'
import useDetailNavigate from 'hooks/use-detail-navigate'
import styled from 'styled-components'
import { useDevice } from '../../../hooks/use-device'

const OneCard = ({ data }) => {
	let {
		id,
		overview,
		backdrop_path,
		vote_average,
		poster_path,
		release_date,
		title,
	} = data
	const navigate = useDetailNavigate()
	if (backdrop_path == null) {
		backdrop_path = poster_path
	}
	const { isMobile, isTablet, isDesktop } = useDevice()
	const backdrop_url = TMDB_URL + backdrop_path
	const poster_url = TMDB_URL + poster_path
	return (
		<Container sx={{ overflow: 'hidden' }}>
			<Card onClick={() => navigate(id)} backdrop_path={backdrop_url}>
				<InnerBox>
					{!isMobile ? (
						<>
							<Poster poster_path={poster_url} />
							<TitleBox>
								<Title>{title}</Title>
								<CreateAt>create_at {release_date}</CreateAt>
								<OverView>{overview}</OverView>
								<Score>
									<svg>
										<text textAnchor="end" x="100" y="0">
											<tspan dy="1em">
												{Math.round(vote_average * 10) / 10}
											</tspan>
										</text>
									</svg>
								</Score>
							</TitleBox>
						</>
					) : (
						<OverViewMobile>{title}</OverViewMobile>
					)}
				</InnerBox>
			</Card>
		</Container>
	)
}

export default OneCard

const Title = styled.div`
	font-size: 44px;
	width: calc(100% - 90px);
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: rgba(255, 255, 255, 0.8);
`

const CreateAt = styled.div`
	line-height: 30px;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.7);
`
const OverView = styled.div`
	line-height: 25px;
	font-size: 18px;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	color: rgba(255, 255, 255, 0.5);
`

const OverViewMobile = styled.div`
	position: relative;
	margin: auto;
	line-height: 25px;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: rgb(255, 255, 255);
	overflow: hidden;
`

const Card = styled.div`
	position: relative;
	width: 100%;
	height: 350px;
	background-image: url(${({ backdrop_path }) => backdrop_path});
	transition: 0.5s;
	background-size: cover;
	cursor: pointer;
	&:hover {
		transform: scale(101%);
	}
	&:before {
		content: '';
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(
			270deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 0.7) 100%
		);
	}
`

const InnerBox = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px;
	display: flex;
	flex-direction: row;
`

const Poster = styled.div`
	position: relative;
	background-image: url(${({ poster_path }) => poster_path});
	background-size: cover;
	height: 100%;
	width: 200px;
`

const TitleBox = styled.div`
	position: relative;
	width: calc(100% - 200px);
	padding: 0 20px 0 20px;
	overflow: hidden;
`

const Score = styled.div`
	position: absolute;
	justify-content: flex-end;
	top: -15px;
	right: 0;
	svg {
		width: 100px;
		height: auto;
	}

	text {
		font-weight: 900;
		paint-order: stroke;
		stroke: #f6f6f6;
		stroke-width: 1px;
		stroke-linecap: butt;
		stroke-linejoin: miter;
		fill: rgba(255, 255, 255, 0);

		tspan {
			font-size: 68px;
		}
	}
`
