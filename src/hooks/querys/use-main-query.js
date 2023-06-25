import { useQuery } from '@tanstack/react-query'
import MOVIE_API from 'apis/main-movie-api'
import { queryConfig } from './@config'

export const useGetList = API_KEY => {
	const { data, isLoading } = useQuery([API_KEY], () =>
		MOVIE_API.getList(API_KEY),
	)
	return { data, isLoading }
}

export const useSearchKeyWord = KEY_WORD => {
	const { data, isLoading } = useQuery(
		[KEY_WORD],
		() => MOVIE_API.getSearchWithKeyWord(KEY_WORD),
		queryConfig,
	)
	return { data, isLoading }
}
