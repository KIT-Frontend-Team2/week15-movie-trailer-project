import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
	const routing = router

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={routing} />
		</ThemeProvider>
	)
}

export default App
