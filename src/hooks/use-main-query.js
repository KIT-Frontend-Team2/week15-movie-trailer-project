import API_KEYWORD from 'consts/apiKeyword'

const { axiosInstance } = require('apis/@core')

const getPopular = async () => {
	res = axiosInstance(API_KEYWORD.POPULAR)
}

const getNowPlaying = async () => {
	res = axiosInstance(API_KEYWORD.NOW_PLAYING)
}

const getTopRated = async () => {
	res = axiosInstance(API_KEYWORD.TOP_RATED)
}
const getUpcoming = async () => {
	res = axiosInstance(API_KEYWORD.UP_COMING)
}
