import { useMediaQuery } from '@mui/material'

export const useDevice = () => {
	const isMobile = useMediaQuery('(max-width: 425px)')
	const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 1023px)')
	const isDesktop = useMediaQuery('(min-width: 1024px)')

	return {
		isMobile,
		isTablet,
		isDesktop,
	}
}
