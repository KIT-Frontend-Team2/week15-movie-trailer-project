import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'App.css'
import TMDB_URL from 'consts/tmdbUrl'
const MainBanner = ({ posters }) => {
	return (
		<MainBox>
			<LeftSection>
				<Title>LOGO</Title>
				<IntroduceSite>IntroduceSite Info</IntroduceSite>
				<SiteMessage>
					Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
					Carrot cake caramels pie sweet apple pie tiramisu carrot cake.{' '}
				</SiteMessage>
			</LeftSection>
			<RightSection>
				<>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination]}
						className="mySwiper"
					>
						{posters.map((poster, index) => {
							const { id, backdrop_path, title } = poster
							const url = TMDB_URL + backdrop_path
							return (
								<SwiperSlide key={index}>
									<SlideImage src={url} alt={id} />
									<SlideTitle>{title}</SlideTitle>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</>
			</RightSection>
		</MainBox>
	)
}

export default MainBanner

const MainBox = styled.div`
	display: flex;
`

const LeftSection = styled.div`
	width: 40%;
`

const RightSection = styled.div`
	width: 60%;
`

const Title = styled.div`
	font-size: 80px;
	font-weight: bold;
	margin: 20px 0 20px 0;
`

const IntroduceSite = styled.div`
	font-size: 32px;
`
const SiteMessage = styled.div`
	color: gray;
	font-size: 24;
	margin: 40px 0 20px 0;
`
const SlideTitle = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
`
const SlideImage = styled.img`
	position: relative;
	z-index: 0;
`
