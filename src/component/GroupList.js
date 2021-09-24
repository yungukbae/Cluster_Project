import Card from './Card'
import styled from "styled-components";



const ListContainer = styled.div`
     display:grid;
     padding-top:40px;
     grid-gap: 15px;
     grid-template-rows:repeat(2,1fr);
     grid-template-columns:repeat(3,3fr);
`

const GroupList = () => {

    return(
        <div style={{width:'820px',height:'100vh',margin:'0 auto'}}>
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