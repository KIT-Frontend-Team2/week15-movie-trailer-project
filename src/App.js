import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
	const routing = router
	const client = new QueryClient()

	return (

		<QueryClientProvider client={client}>
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={routing} />
			</ThemeProvider>
		</RecoilRoot>
		</QueryClientProvider>
	)
}

export default App
