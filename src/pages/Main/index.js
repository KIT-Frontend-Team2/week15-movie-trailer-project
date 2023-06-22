import { Container } from '@mui/system'
import { selectApiTypeAtom } from 'atom/ui.atom'
import MainBanner from 'components/Main/MainBanner'
import { useRecoilValue } from 'recoil'

const MainPage = () => {
	const isMain = useRecoilValue(selectApiTypeAtom)
	return <Container>{isMain && <MainBanner />}</Container>
}

export default MainPage
