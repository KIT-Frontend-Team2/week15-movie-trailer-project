import API_KEYWORD from 'consts/apiKeyword'

const { axiosInstance } = require('apis/@core')

const getPopular = () => {
	return (res.data = axiosInstance(API_KEYWORD.POPULAR))
}

const getNowPlaying = async () => {
	return (res.data = axiosInstance(API_KEYWORD.NOW_PLAYING))
}

const getTopRated = async () => {
	return (res.data = axiosInstance(API_KEYWORD.TOP_RATED))
}
const getUpcoming = async () => {
	return (res.data = axiosInstance(API_KEYWORD.UP_COMING))
}

const MOVIE_API = {
	getPopular,
	getNowPlaying,
	getTopRated,
	getUpcoming,
}

export default MOVIE_API
