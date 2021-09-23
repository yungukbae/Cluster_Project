import Card from './Card'
import styled from "styled-components";



const ListContainer = styled.div`
     display:grid;
     width:100%;
     height:100%;
     grid-gap: 20px;
     grid-template-rows:repeat(2,1fr);
     grid-template-columns:repeat(3,1fr);
`

const GroupList = () => {

    return(
        <div style={{width:'60%',height:'100vh',padding:'0 20% 0 20%'}}>
            <ListContainer>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             </ListContainer>
        </div>
    )
}

export default GroupList;