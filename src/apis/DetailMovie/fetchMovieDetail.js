import { axiosInstance } from 'apis/@core'

export const fetchMovieDetail = async detailId => {
	const res = await axiosInstance.get(`/${detailId}`, {
		params: {
			append_to_response: 'videos,images,reviews,keywords',
		},
	})
	return res.data
}
