import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

function App() {
	const routing = router

	return (
		<RecoilRoot>
			<RouterProvider router={routing} />
		</RecoilRoot>
	)
}

export default App
