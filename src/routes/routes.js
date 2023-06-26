import Layout from 'common/Layout'
import MainPage from 'pages/Main'
import DetailPage from 'pages/Detail'
import { createBrowserRouter } from 'react-router-dom'
import SearchPage from 'pages/Search'
import ListPage from 'pages/List'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <MainPage /> },
			{ path: '/:selectKeyWord', element: <ListPage /> },
			{ path: '/detail/:detailId', element: <DetailPage /> },
			{ path: '/search/:keyword', element: <SearchPage /> },
		],
	},
])
/**
 * Main => list 페이지로 강제이동.
 *
 */

export default router
