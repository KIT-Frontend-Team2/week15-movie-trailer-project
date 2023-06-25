import { useParams } from 'react-router-dom'

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
import PauseIcon from '@mui/icons-material/Pause'
import YouTube from 'react-youtube'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetail } from 'apis/DetailMovie/fetchMovieDetail'
import { useRef, useState } from 'react'
import TMDB_URL from 'consts/tmdbUrl'

const DetailPage = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const ref = useRef(null)

	const { detailId } = useParams()
	const { data, isLoading, isError, error } = useQuery(
		['movieDetail', detailId],
		() => fetchMovieDetail(detailId),
	)

	if (isLoading) {
		return <div>Loading..</div>
	}

	if (isError) {
		return <div>Error: {error.message}</div>
	}

	const {
		backdrop_path,
		status,
		genres,
		title,
		overview,
		runtime,
		vote_average,
		release_date,
		videos,
		images,
		reviews,
		keywords,
	} = data

	const backdrop_path_src = `${TMDB_URL}${backdrop_path}`
	const reviewList = reviews.results.slice(0, 4)
	const posterList = images.posters.slice(0, 9)
	const videoId =
		videos.results.length > 0
			? videos.results.find(result => result.type === 'Trailer').key
			: ''
	const keywordList = keywords.keywords.slice(0, 3)
	const overviewVideoId =
		videos.results.length > 0
			? videos.results
					.slice()
					.reverse()
					.find(result => result.type === 'Trailer').key
			: ''

	const handleClickBtn = () => {
		if (isPlaying) {
			ref.current.internalPlayer.pauseVideo()
		} else {
			ref.current.internalPlayer.playVideo()
		}
		setIsPlaying(!isPlaying)
	}

	const onReady = () => {
		ref.current.internalPlayer.setVolume(20)
		setIsPlaying(true)
	}

	return (
		<S.Wrapper>
			<S.Visual>
				{videoId ? (
					<S.MovieFrame>
						{/* 유튜브 프레임 배경 */}
						<YouTube
							videoId={videoId}
							ref={ref}
							allow="autoplay; encrypted-media; fullscreen"
							frameborder="0"
							opts={{
								width: '100%',
								// height: '708',
								playerVars: {
									autoplay: 1, // 자동재생 O
									rel: 0, // 관련 동영상 표시 X
									controls: 0, // 플레이어 컨트롤이 표시 X
									modestbranding: 1, // 컨트롤바에 youtube 로고 X
								},
							}}
							onReady={onReady}
						/>
					</S.MovieFrame>
				) : (
					<BackGround backdrop_path_src={backdrop_path_src}></BackGround>
				)}
				<S.VisualInfo>
					<S.VisualInfoBox>
						<S.InfoTop>
							<div>
								<div>
									<Typography variant="subtitle2">{status}</Typography>
									<Typography variant="subtitle1">{release_date}</Typography>
								</div>
								<div>
									<Typography variant="subtitle2">{runtime} min</Typography>
									<Typography variant="subtitle1">
										{genres.map(genre => genre.name).join(', ')}
									</Typography>
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
									<Typography variant="subtitle2">Movie Rate</Typography>
								</div>
								{videoId && (
									<S.PlayButton>
										{isPlaying ? (
											<PauseIcon
												sx={{ color: '#000', fontSize: '28px' }}
												onClick={handleClickBtn}
											/>
										) : (
											<PlayArrowIcon
												sx={{ color: '#000', fontSize: '28px' }}
												onClick={handleClickBtn}
											/>
										)}
									</S.PlayButton>
								)}
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
										padding: '12px 36px',
									}}
									size="large"
									onClick={() => {
										window.alert('준비중 입니다')
									}}
								>
									Book now
								</Button>
							</div>
							<S.Keywords>
								{keywordList.length > 0 &&
									keywordList.map(keyword => (
										<Typography>{`#${keyword.name}`}</Typography>
									))}
							</S.Keywords>
						</S.InfoBottom>
					</S.VisualInfoBox>
				</S.VisualInfo>
			</S.Visual>
			<S.Container>
				<S.Section>
					{overviewVideoId && (
						<YouTube
							videoId={overviewVideoId}
							frameborder="0"
							opts={{
								width: '1259',
								height: '708',
								playerVars: {
									autoplay: 0,
								},
							}}
						/>
					)}
					<S.SectionInfo>
						<Typography variant="h3" gutterBottom>
							Overview
						</Typography>
						<Typography variant="body1" sx={{ lineHeight: 2 }}>
							{overview}
						</Typography>
					</S.SectionInfo>
				</S.Section>
				<S.Section>
					<S.SectionInfo>
						<Typography variant="h3" gutterBottom>
							Reviews
						</Typography>
						<S.ReviewList>
							{reviewList.length > 0 ? (
								reviewList.map(review => (
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
													src={`${TMDB_URL}${review.author_details.avatar_path}`}
												/>
											</ListItemAvatar>
											<S.ReviewContent>{review.content}</S.ReviewContent>
										</ListItem>
									</List>
								))
							) : (
								<Typography
									variant="body1"
									sx={{ lineHeight: 10, textAlign: 'center' }}
								>
									No Reviews
								</Typography>
							)}
						</S.ReviewList>
						<Button
							variant="contained"
							sx={{
								backgroundColor: '#F1404B',
								color: '#fff',
								':hover': { backgroundColor: '#F1404B' },
							}}
							size="large"
							onClick={() => {
								window.alert('준비중 입니다')
							}}
						>
							Write review
						</Button>
					</S.SectionInfo>
					<ImageList sx={{ width: '50%', maxHeight: '600px' }} cols={3}>
						{posterList.length > 0 &&
							posterList.map(item => (
								<ImageListItem key={item.file_path}>
									<img
										src={`${TMDB_URL}${item.file_path}?w=161&fit=crop&auto=format`}
										srcSet={`${TMDB_URL}${item.file_path}?w=161&fit=crop&auto=format&dpr=2 2x`}
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
	color: #eee;
	font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Visual = styled.div`
	position: relative;
	width: 100%;
	height: 88vh;
	max-height: 900px;
`

const BackGround = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-image: url(${({ backdrop_path_src }) => backdrop_path_src});
	background-size: cover;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 1) 100%
		);
	}
`

const MovieFrame = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	div {
		position: absolute;
		inset: 0;
		overflow: hidden;

		iframe {
			transform: scale(1.5);
			width: 100%;
			height: 100%;
		}
	}

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 10;
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
		height: 150px;
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
			font-size: 140px;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
				sans-serif;
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
	font-family: system-ui, -apple-system, Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue';
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

const Keywords = styled.div`
	display: flex;
	gap: 16px;
`

const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding-bottom: 10em;
`

const Section = styled.div`
	padding-top: 5em;
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
	line-height: 1.5;
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
	Keywords,
	Container,
	Section,
	SectionInfo,
	ReviewList,
	ReviewContent,
}
