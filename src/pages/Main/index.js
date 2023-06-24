import API_KEYWORD from 'consts/apiKeyword'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate(API_KEYWORD.POPULAR)
	}, [])
}

export default MainPage
