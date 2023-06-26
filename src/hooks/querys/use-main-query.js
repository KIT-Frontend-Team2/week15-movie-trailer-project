import { useInfiniteQuery } from '@tanstack/react-query'
import MOVIE_API from 'apis/main-movie-api'
import { queryConfig } from './@config'

export const useGetList = API_KEY => {
	const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery(
			[API_KEY],
			({ pageParam = 1 }) => MOVIE_API.getList(API_KEY, pageParam),
			{
				getNextPageParam: lastPage => {
					if (lastPage && lastPage.data.page) {
						return lastPage.data.page + 1
					}

					return null
				},
			},
		)
	return { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }
}

export const useSearchKeyWord = KEY_WORD => {
	const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery(
			[KEY_WORD],
			({ pageParam = 1 }) =>
				MOVIE_API.getSearchWithKeyWord(KEY_WORD, pageParam),
			{
				...queryConfig,
				getNextPageParam: lastPage => lastPage.data.page + 1,
			},
		)
	return { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }
}
