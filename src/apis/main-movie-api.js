import axios from 'axios'

const { axiosInstance } = require('apis/@core')

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

const getList = API_KEY => {
	return axiosInstance.get(API_KEY)
}

const getSearchWithKeyWord = query => {
	return axios.get(SEARCH_URL, {
		params: {
			query,
		},
	})
}

const MOVIE_API = {
	getList,
	getSearchWithKeyWord,
}

export default MOVIE_API
