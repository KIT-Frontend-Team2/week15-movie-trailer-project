import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'App.css'
const MainBanner = () => {
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
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
					</Swiper>
				</>
			</RightSection>
		</MainBox>
	)
}

export default MainBanner

const MainBox = styled.div`
	margin-top: 50px;
	display: flex;
	height: 300px;
`

const LeftSection = styled.div`
	width: 40%;
`

const RightSection = styled.div`
	width: 60%;
`

const Title = styled.h5`
	font-size: 80px;
	font-weight: bold;
	margin: 20px 0 20px 0;
`

const IntroduceSite = styled.p`
	font-size: 32px;
`
const SiteMessage = styled.p`
	color: gray;
	font-size: 24;
	margin: 40px 0 20px 0;
`
