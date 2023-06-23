import axios from 'axios'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		Authorization: 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
	},
})

export const searchAxios = axios.create({
	baseURL: SEARCH_URL,
	headers: {
		Authorization: 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
	},
})
