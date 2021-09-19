import styled from 'styled-components'

const CardItem = styled.div`

    width:100%;
    height:400px;
    display:grid;
    grid-template-rows:350px 50px;
  
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
    overflow:hidden;
`

const CardTop = styled.div`
    
    background-color:#b6b6b6;
    position:relative;
    
`

const CardIMG = styled.div`
    
    height:140px;
    width:140px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#fff;
    border-radius:70px;
    
`

const CardType = styled.div`
    
    height: calc(100% - 60px);
    line-height:30px;
    
`

const CardTitle = styled.div`

    height:40px;
    line-height:40px;

`

const Card = () => {


    return (
        <div style={{width: '100%', height: '100%'}}>
            <CardItem>
                <CardTop>
                    {/*background*/}
                    <div style={{backgroundColor:'#000',width:'100%',height:'50%'}}>
                        <div>
                            <button>button</button>
                        </div>
                    </div>

                    {/*content*/}
                    <div style={{height:'50%'}}>
                        <CardIMG>picture</CardIMG>
                        <CardType>스터디</CardType>
                        <CardTitle>이것은 제목이다.</CardTitle>
                    </div>
                </CardTop>

                <div></div>
            </CardItem>
        </div>
    );
}

export default Card;
