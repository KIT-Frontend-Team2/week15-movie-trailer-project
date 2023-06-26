import { useLocation } from 'react-router-dom'

const useDetailLocation = () => {
	const location = useLocation()

	if (!location.pathname.includes('detail')) return false
	return true
}

export default useDetailLocation
