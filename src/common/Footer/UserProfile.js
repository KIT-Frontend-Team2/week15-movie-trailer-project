import { CardMedia } from "@mui/material"
import styled from "styled-components"

const UserProfile = ({ gitID, name }) => {
    return (
        <CardProflie >
            <CardMedia component="img" image={`https://avatars.githubusercontent.com/u/${gitID}?s=96&v=4`} alt={name} />
            <CardUserName>{name}</CardUserName>
        </CardProflie>
    )
}

export default UserProfile

const CardProflie = styled.div`
    height: 45px;
   display: flex;
   object-fit: cover;
   img {
    width: 45px;
    height: 45px;
    border-radius: 2px;
   }
`

const CardUserName = styled.div`
color: black;
padding: 12px;
`