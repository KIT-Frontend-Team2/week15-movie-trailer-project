import { useParams } from 'react-router-dom'

const DetailPage = () => {
	const { detailId } = useParams()
	console.log({ detailId })

	return (
		<>
			<div>디테일 페이지입니다.</div>
		</>
	)
}
export default DetailPage
