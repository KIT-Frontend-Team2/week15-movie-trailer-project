import { useQuery } from '@tanstack/react-query'
import MOVIE_API from 'apis/main-movie-api'
import { queryConfig } from './@config'

export const useGetList = API_KEY => {
	const { data, isLoading } = useQuery(
		[API_KEY],
		() => MOVIE_API.getList(API_KEY),
		queryConfig,
	)
	return { data, isLoading }
}
