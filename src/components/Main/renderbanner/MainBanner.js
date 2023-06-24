import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'App.css'
import TMDB_URL from 'consts/tmdbUrl'
import { CardMedia } from '@mui/material'
import { selectApiTypeAtom } from 'atom/ui.atom'
import { useRecoilValue } from 'recoil'
import useDetailNavigate from 'hooks/use-detail-navigate'
const MainBanner = ({ posters }) => {
	const typeSelect = useRecoilValue(selectApiTypeAtom)
	const navigate = useDetailNavigate()
	console.log(posters)
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				// modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{posters.map((poster, index) => {
					const {
						id,
						poster_path,
						backdrop_path,
						title,
						overview,
						release_date,
					} = poster
					const back_url = TMDB_URL + backdrop_path
					const post_url = TMDB_URL + poster_path
					return (
						<SwiperSlide key={index}>
							<BackGround img_src={back_url} />
							<InnerBox>
								<CardMedia
									onClick={() => {
										navigate(id)
									}}
									component="img"
									image={post_url}
									sx={{
										minWidth: '200px',
										maxWidth: '400px',
										cursor: 'pointer',
									}}
								/>
								<TextMedia>
									<IntroduceText>
										<div>
											<TitleText>{title}</TitleText>
											<OverViewText>{overview}</OverViewText>
										</div>
										<MakeDateText>create at {release_date}</MakeDateText>
									</IntroduceText>
								</TextMedia>
							</InnerBox>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<TitleHeader>{typeSelect.split('/')[1] + ' MOVIES'}</TitleHeader>
		</>
	)
}

export default MainBanner

const TextMedia = styled.div`
	margin-left: 30px;
`

const IntroduceText = styled.div`
	display: flex;
	color: white;
	text-align: start;
	flex-direction: column;
	height: 100%;
	line-height: 32px;
	justify-content: space-between;
	div {
		margin: 5px 0 5px 0;
	}
`

const TitleText = styled.div`
	font-size: 32px;
	font-weight: bold;
	color: rgba(255, 255, 255, 0.8);
`

const OverViewText = styled.div`
	font-size: 16px;
	color: rgba(255, 255, 255, 0.7);
`

const MakeDateText = styled.div`
	font-size: 12px;
	color: rgba(255, 255, 255, 0.5);
`

const InnerBox = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 40px;
	display: flex;

	img {
		transition: 1s;
	}

	:hover {
		img {
			transform: scale(1.02);
		}
	}
`

const BackGround = styled.div`
	position: relative;
	width: 100%;
	height: 350px;
	background-image: url(${({ img_src }) => img_src});
	background-size: cover;
	&:before {
		content: '';
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

const TitleHeader = styled.p`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 32px;
	margin: 20px 0 20px 20px;
`
