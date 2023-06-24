const { axiosInstance, searchAxios } = require('apis/@core')

const getList = API_KEY => {
	return axiosInstance.get(API_KEY)
}

const getSearchWithKeyWord = query => {
	return searchAxios.get('', {
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
