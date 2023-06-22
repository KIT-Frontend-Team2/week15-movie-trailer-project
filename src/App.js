import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
	const routing = router

	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={routing} />
			</ThemeProvider>
		</RecoilRoot>
	)
}

export default App
