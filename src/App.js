import router from 'routes/routes'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient({
		refetchOnMount: false,
	})

	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ThemeProvider>
		</RecoilRoot>
	)
}

export default App
