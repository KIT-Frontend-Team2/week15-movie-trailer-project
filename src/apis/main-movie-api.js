const { axiosInstance, searchAxios } = require('apis/@core')

const getList = (API_KEY, pageParam) => {
	return axiosInstance.get(API_KEY, {
		params: {
			page: pageParam,
		},
	})
}

const getSearchWithKeyWord = (query, pageParam) => {
	return searchAxios.get('', {
		params: {
			query,
			page: pageParam,
		},
	})
}

const MOVIE_API = {
	getList,
	getSearchWithKeyWord,
}

export default MOVIE_API
