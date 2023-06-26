import { useEffect, useState } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab } from '@mui/material'

const ScrollUp = () => {
	const [scroll, setScroll] = useState() // 스크롤 값을 저장하기 위한 상태
	const [btnStatus, setBtnStatus] = useState(false) // 버튼 상태

	const handleFollow = () => {
		const currentScroll = window.pageYOffset
		setScroll(currentScroll) // window 스크롤 값을 scroll에 저장
		if (currentScroll > 100 && !btnStatus) {
			setBtnStatus(true)
		} else if (currentScroll <= 100 && btnStatus) {
			setBtnStatus(false)
		}
		setScroll(currentScroll) // window 스크롤 값을 scroll에 저장
	}

	const handleTop = () => {
		// 클릭 시 스크롤 위로 올라가는 함수
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		setScroll(0) // scroll 의 값 초기화
		setBtnStatus(false) // btn 값을 false로 바꿔 버튼 숨김
	}

	// useEffect(() => {
	// 	console.log('scroll is', scroll) // scroll이 변할 때마다 값을 콘솔에 출력
	// }, [scroll])

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', handleFollow)
		}
		watch() // addEvent 함수를 실행
		return () => {
			window.removeEventListener('scroll', handleFollow) // addEvent 함수를 삭제
		}
	})

	return (
		<div>
			{btnStatus && (
				<Fab
					color="primary"
					aria-label="scroll-top"
					onClick={handleTop}
					sx={{
						position: 'fixed',
						bottom: '40px',
						right: '40px',
						zIndex: 10,
					}}
				>
					<KeyboardArrowUp />
				</Fab>
			)}
		</div>
	)
}

export default ScrollUp
