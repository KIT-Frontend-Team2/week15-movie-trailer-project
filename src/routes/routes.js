import Layout from 'common/Layout'
import MainPage from 'pages/Main'
import DetailPage from 'pages/Detail'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/:selectKeyWord', element: <MainPage /> },
			{ path: '/detail/:detailId', element: <DetailPage /> },
		],
	},
])

export default router
