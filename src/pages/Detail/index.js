import { useParams } from 'react-router-dom'

import styled, { css } from 'styled-components'
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
import {
	flexBetween,
	flexBetweenEnd,
	flexCenter,
	positionInset,
} from 'styles/common'
import { useDevice } from 'hooks/use-device'

const DetailPage = () => {
	const [isPlaying, setIsPlaying] = useState(true)
	const ref = useRef(null)
	const { detailId } = useParams()
	const { data, isLoading } = useQuery(['movieDetail', detailId], () =>
		fetchMovieDetail(detailId),
	)
	const { isDesktop } = useDevice()

	const handleClickBtn = () => {
		if (isPlaying) {
			ref.current.internalPlayer.pauseVideo()
		} else {
			ref.current.internalPlayer.playVideo()
		}
		setIsPlaying(!isPlaying)
	}

	//TODO: 새로고침 시에도 자동재생 되도록 수정

	if (isLoading) {
		return <S.Skeleton>Loading..</S.Skeleton>
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

	const backdrop_path_src = `${TMDB_URL}${backdrop_path}` // 배경 헤더 이미지 (동영상 없을 경우 노출)
	const reviewList = reviews.results.slice(0, 4) // 리뷰 최대 4개 까지 노출
	const posterList = images.posters.slice(0, 9) // 포스터 최대 9개 까지 노출
	const videoId =
		videos.results.length > 0
			? videos.results.find(result => result.type === 'Trailer').key
			: '' // video Trailer 중에 가장 최신 동영상 가져오기
	const keywordList = keywords.keywords.slice(0, 3) // 키워드 최대 3개 노출
	const overviewVideoId =
		videos.results.length > 0
			? videos.results
					.slice()
					.reverse()
					.find(result => result.type === 'Trailer').key
			: '' // video Trailer 중에 가장 오래된 동영상 가져오기

	return (
		<S.Wrapper>
			{/* 비주얼(영화 트테일러, 영화 정보) 영역 시작 */}
			<S.Visual>
				{videoId && isDesktop ? (
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
						/>
					</S.MovieFrame>
				) : (
					<BackGround backdrop_path_src={backdrop_path_src}></BackGround>
				)}
				<S.VisualInfo>
					<S.VisualInfoBox isDesktop={isDesktop}>
						<S.InfoTop isDesktop={isDesktop}>
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
							{isDesktop && (
								<S.Score>
									<svg>
										<text textAnchor="end" x="300" y="0">
											<tspan dy="1em">
												{Math.round(vote_average * 10) / 10}
											</tspan>
										</text>
									</svg>
								</S.Score>
							)}
						</S.InfoTop>
						<S.InfoMiddle isDesktop={isDesktop}>
							<S.Title isDesktop={isDesktop}>{title}</S.Title>
							<S.MiddleRight>
								<div>
									<Rating name="read-only" value={vote_average / 2} readOnly />{' '}
									{isDesktop && (
										<Typography variant="subtitle2">Movie Rate</Typography>
									)}
								</div>
								{videoId && isDesktop && (
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
						<S.InfoBottom isDesktop={isDesktop}>
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
										<Typography
											key={keyword.id}
										>{`#${keyword.name}`}</Typography>
									))}
							</S.Keywords>
						</S.InfoBottom>
					</S.VisualInfoBox>
				</S.VisualInfo>
			</S.Visual>
			{/* 비주얼 영역 끝 */}
			<S.Container isDesktop={isDesktop}>
				<S.Section isDesktop={isDesktop}>
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
				<S.Section isDesktop={isDesktop}>
					<S.SectionInfo>
						<Typography variant="h3" gutterBottom>
							Reviews
						</Typography>
						<S.ReviewList isDesktop={isDesktop}>
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
													src={`${TMDB_URL}/${review.author_details.avatar_path}`}
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
					<S.SectionInfo>
						<ImageList sx={{ width: '100%', maxHeight: '600px' }} cols={3}>
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
					</S.SectionInfo>
				</S.Section>
			</S.Container>
		</S.Wrapper>
	)
}
export default DetailPage

const Skeleton = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #000;
	${flexCenter}
`

const Wrapper = styled.div`
	width: 100%;
	color: #eee;
	font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
	background: #000 linear-gradient(180deg, #000 40%, #252c41 100%);
`

const Visual = styled.div`
	position: relative;
	width: 100%;
	min-height: 88vh;
	max-height: 900px;
`

const BackGround = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url(${({ backdrop_path_src }) => backdrop_path_src});
	background-size: cover;
	background-position: center;

	&:before {
		content: '';
		${positionInset}
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
		${positionInset}
		overflow: hidden;

		iframe {
			transform: scale(1.5);
			width: 100%;
			height: 100%;
		}
	}

	&:before {
		content: '';
		${positionInset}
		z-index: 10;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 1) 100%
		);
	}
`

const VisualInfo = styled.div`
	position: relative;
	z-index: 20;
	${flexCenter}
	min-height: 88vh;
`
const VisualInfoBox = styled.div`
	width: 80%;
	height: auto;
	max-width: 1200px;
	max-height: 90%;
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			padding-top: 5em;
			width: 90%;
		`}
`

const InfoTop = styled.div`
	${flexBetweenEnd}
	> div {
		display: flex;
		gap: 3em;
	}
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 1em;

			> div {
				flex-direction: column;
				gap: 1em;
			}
		`}
`

const Score = styled.div`
	justify-content: flex-end;
	svg {
		width: 300px;
		height: 150px;

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
	}
`

const InfoMiddle = styled.div`
	${flexBetween}
	padding-top: 40px;
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			padding-top: 1em;
			flex-direction: column;
			gap: 1em;
		`}
`

const Title = styled.div`
	color: #fff;
	font-size: 96px;
	font-family: system-ui, -apple-system, Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue';
	font-weight: 900;
	max-width: 70%;
	min-height: 220px;
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			font-size: 60px;
			max-width: 100%;
			line-height: 1.3;
		`}
`

const MiddleRight = styled.div`
	${flexBetween}
	flex-direction: column;
`

const PlayButton = styled.div`
	${flexCenter}
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
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			padding-top: 1em;
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 1.5em;
		`}
`

const Keywords = styled.div`
	display: flex;
	gap: 16px;
`

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 10em;
	${({ isDesktop }) =>
		!isDesktop &&
		css`
			width: 100%;
		`}
`

const Section = styled.div`
	padding-top: 4em;
	& + & {
		padding-top: 8em;
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

	${({ isDesktop }) =>
		!isDesktop &&
		css`
			flex-direction: column;
			&:first-child {
				flex-direction: column-reverse;
			}
			gap: 4em;

			& + & {
				padding-top: 4em;
			}

			> div {
				width: 100%;
				padding: 0 20px;
			}
		`}
`

const SectionInfo = styled.div``

const ReviewList = styled.div`
	padding: ${({ isDesktop }) => (isDesktop ? '3em 0 ' : '0 0 2em')};
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
	Skeleton,
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
