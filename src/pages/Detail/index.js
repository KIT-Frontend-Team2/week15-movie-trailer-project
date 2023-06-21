import { useParams } from "react-router-dom"



const DetailPage = () => {

    const {DetaId} = useParams();
    console.log({DetaId});

    return(
        <>
            <div>디테일 페이지입니다.</div>
        </>
    )
}
export default DetailPage