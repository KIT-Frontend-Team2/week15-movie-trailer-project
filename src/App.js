import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const routing = router
	const client = new QueryClient()

	return (
		<QueryClientProvider client={client}>
			<RouterProvider router={routing} />
		</QueryClientProvider>
	)
}

export default App
