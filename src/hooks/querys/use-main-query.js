import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import MOVIE_API from 'apis/main-movie-api'
import { queryConfig } from './@config'

export const useGetList = API_KEY => {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		isLoading,
	} = useInfiniteQuery(
		[API_KEY],
		({ pageParam }) => MOVIE_API.getList(API_KEY, pageParam),
		{
			...queryConfig,
			getNextPageParam: lastPage => lastPage.nextPage,
		},
	)
	return {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		isLoading,
	}
}

export const useSearchKeyWord = KEY_WORD => {
	const { data, isLoading } = useQuery(
		[KEY_WORD],
		() => MOVIE_API.getSearchWithKeyWord(KEY_WORD),
		queryConfig,
	)
	return { data, isLoading }
}
