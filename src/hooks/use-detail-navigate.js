const { useNavigate } = require("react-router-dom")

const useDetailNavigate = () => {

    const navigate = useNavigate();
    const moveNavigate = (id) => {
        window.scrollTo({ top: 0 })
        navigate(`/detail/${id}`)
    }

    return moveNavigate
}

export default useDetailNavigate