import router from 'routes/routes'
import './App.css'
import { RouterProvider } from 'react-router'

function App() {
	const routing = router
	
	return <RouterProvider router={routing}/>
}

export default App
