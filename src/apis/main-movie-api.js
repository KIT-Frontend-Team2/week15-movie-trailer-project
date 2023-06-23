const { axiosInstance } = require('apis/@core')

const getList = API_KEY => {
	return axiosInstance.get(API_KEY)
}

const MOVIE_API = {
	getList,
}

export default MOVIE_API
