import { useParams } from 'react-router-dom'

import { mock } from '../../__mock__/detail.data'
import styled from 'styled-components'
import {
	Avatar,
	Button,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	Rating,
	Typography,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import YouTube from 'react-youtube'

const DetailPage = () => {
	const { detailId } = useParams()
	console.log({ detailId })

	const {
		backdrop_path,
		genres,
		title,
		overview,
		runtime,
		vote_average,
		release_date,
		videos,
		images,
		reviews,
	} = mock
	const base_url = 'http://image.tmdb.org/t/p/'
	const img_size = 'original'
	const img_src = `${base_url}${img_size}${backdrop_path}`
	const reviewList = reviews.results.slice(0, 3)

	return (
		<S.Wrapper>
			<S.Visual>
				<BackGround img_src={img_src}></BackGround>
				<S.MovieFrame>
					{/* 유튜브 프레임 배경 */}
					{/* <YouTube
						videoId={videos.results[0].key}
						allow="autoplay; encrypted-media; fullscreen"
						frameborder="0"
						opts={{
							width: '1259',
							height: '708',
							playerVars: {
								autoplay: 1,
							},
						}}
					/> */}
				</S.MovieFrame>
				<S.VisualInfo>
					<S.VisualInfoBox>
						<S.InfoTop>
							<div>
								<div>
									<div>With</div>
									<div>TestTestTestTest</div>
								</div>
								<div>
									<div>{runtime}min</div>
									<div>{genres.map(genre => genre.name).join(', ')}</div>
								</div>
							</div>
							<S.Score>
								<svg>
									<text textAnchor="end" x="300" y="0">
										<tspan dy="1em">{Math.round(vote_average * 10) / 10}</tspan>
									</text>
								</svg>
							</S.Score>
						</S.InfoTop>
						<S.InfoMiddle>
							<S.Title>{title}</S.Title>
							<S.MiddleRight>
								<div>
									<Rating name="read-only" value={vote_average / 2} readOnly />{' '}
									<div>Movie Rate</div>
								</div>
								<S.PlayButton>
									<PlayArrowIcon sx={{ color: '#000', fontSize: '28px' }} />
								</S.PlayButton>
							</S.MiddleRight>
						</S.InfoMiddle>
						<S.InfoBottom>
							<div>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#F1404B',
										color: '#fff',
										':hover': { backgroundColor: '#F1404B' },
									}}
									size="large"
								>
									Book now
								</Button>
							</div>
							<div>{release_date}</div>
							<div></div>
						</S.InfoBottom>
					</S.VisualInfoBox>
				</S.VisualInfo>
			</S.Visual>
			<S.Container>
				<S.Section>
					<YouTube
						videoId={videos.results[0].key}
						allow="autoplay; encrypted-media; fullscreen"
						frameborder="0"
						opts={{
							width: '1259',
							height: '708',
							playerVars: {
								autoplay: 1,
							},
						}}
					/>
					<S.SectionInfo>
						<h1>overview</h1>
						<Typography variant="subtitle1" gutterBottom>
							{overview}
						</Typography>
					</S.SectionInfo>
				</S.Section>
				<S.Section>
					<S.SectionInfo>
						<h1>주목!</h1>
						<S.ReviewList>
							{reviewList.map(review => (
								<List
									sx={{
										width: '100%',
									}}
									key={review.id}
								>
									<ListItem alignItems="center">
										<ListItemAvatar>
											<Avatar
												alt="Remy Sharp"
												src={review.author_details.avatar_path}
											/>
										</ListItemAvatar>
										<S.ReviewContent>{review.content}</S.ReviewContent>
									</ListItem>
								</List>
							))}
						</S.ReviewList>
						<Button
							variant="contained"
							sx={{
								backgroundColor: '#F1404B',
								color: '#fff',
								':hover': { backgroundColor: '#F1404B' },
							}}
							size="large"
						>
							Book now
						</Button>
					</S.SectionInfo>
					<ImageList sx={{ width: '50%', height: '600px' }} cols={3}>
						{images.posters.map(item => (
							<ImageListItem key={item.file_path}>
								<img
									src={`${base_url}${img_size}${item.file_path}?w=161&fit=crop&auto=format`}
									srcSet={`${base_url}${img_size}${item.file_path}?w=161&fit=crop&auto=format&dpr=2 2x`}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</S.Section>
			</S.Container>
		</S.Wrapper>
	)
}
export default DetailPage

const Wrapper = styled.div`
	width: 100%;

	/* background-color: #000; */
	background: #000 linear-gradient(180deg, #000 40%, #252c41 100%);
	color: #fff;
`

const Visual = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
`

const BackGround = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	background-image: url(${({ img_src }) => img_src});
	background-size: cover;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		/* background-color: rgba(0, 0, 0, 0.5); */
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 1) 100%
		);
	}
`

const MovieFrame = styled.div`
	position: absolute;
	inset: 0;

	div {
		position: absolute;
		inset: 0;
		aspect-radio: 16 / 9;

		iframe {
			width: 100%;
			height: 100%;
		}
	}

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 10;
		/* background-color: rgba(0, 0, 0, 0.5); */
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 1) 100%
		);
	}
`

const VisualInfo = styled.div`
	position: absolute;
	z-index: 20;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`
const VisualInfoBox = styled.div`
	width: 80%;
	height: auto;
	max-width: 1200px;
	max-height: 90%;
`

const InfoTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	> div {
		display: flex;
		gap: 3em;
	}
`

const Score = styled.div`
	justify-content: flex-end;

	svg {
		width: 300px;
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
			font-size: 125px;
		}
	}
`

const InfoMiddle = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 40px;
`

const Title = styled.div`
	font-size: 96px;
	font-weight: 900;
	max-width: 70%;
	min-height: 220px;
`

const MiddleRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

const PlayButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	background-color: #fff;
	border-radius: 32px;
	cursor: pointer;
`

const InfoBottom = styled.div`
	padding-top: 40px;
	display: flex;
	align-items: center;
	gap: 3em;
`

const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding-bottom: 10em;
`

const Section = styled.div`
	& + & {
		padding-top: 10em;
	}
	display: flex;
	gap: 4%;

	> div {
		width: 48%;

		iframe {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
		}
	}
`

const SectionInfo = styled.div``

const ReviewList = styled.div`
	padding: 3em 0;
`

const ReviewContent = styled.div`
	width: 80%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-size: 14px;
`

const S = {
	Wrapper,
	Visual,
	BackGround,
	MovieFrame,
	VisualInfo,
	VisualInfoBox,
	InfoTop,
	Score,
	InfoMiddle,
	Title,
	MiddleRight,
	PlayButton,
	InfoBottom,
	Container,
	Section,
	SectionInfo,
	ReviewList,
	ReviewContent,
}
