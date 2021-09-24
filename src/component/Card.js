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
    
    position:relative;
    
`

const CardTopBack = styled.div`

    background-image:url('/img/img.png');
    width:100%;
    height:50%;

`

const CardButton = styled.button`
    
    height:30px;
    width:30px;
    float:right;
    border-radius:30px;
    outline:0;
    border:#000;
    background-color:#fff;
    margin:10px;
    cursor:pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    
`

const CardIMG = styled.div`
    
    height:110px;
    width:110px;
    position:absolute;
    top: 50%;
    left: 50%;
    overflow:hidden;
    transform: translate(-50%, -50%);
    background-color:#fff;
    border-radius:70px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
`

const CardType = styled.div`
    
    position:absolute;
    height: 30px;
    width:100%;
    line-height:30px;
    bottom:50px;
    text-align:center;
`

const CardTitle = styled.div`

    position:absolute;
    height:30px;
    width:100%;
    line-height:30px;
    bottom:20px;
    text-align:center;

`

const CardBottom = styled.div`


`

const BottomBtn = styled.button`

    display:block;
    background-color:#6c757d;
    width:calc(100%/3);
    height:100%;
    float:left;
    border:0;
    outline:0;
    
    
`

const Card = () => {


    return (
        <div style={{width: '260px', height: '100%'}}>
            <CardItem>
                <CardTop>
                    {/*background*/}
                    <CardTopBack>
                        <div>
                            <CardButton><i className="far fa-heart"></i></CardButton>
                        </div>
                    </CardTopBack>

                    {/*content*/}
                    <div style={{height:'50%'}}>
                        <CardIMG><img src="/img/img_1.png" alt="no img" style={{height:'80%',display:'block',margin:'10% auto',}}/></CardIMG>
                        <CardType>스터디</CardType>
                        <CardTitle>이것은 제목이다.</CardTitle>
                    </div>
                </CardTop>
                <CardBottom>
                    <BottomBtn>홍대</BottomBtn>
                    <BottomBtn>주3회</BottomBtn>
                    <BottomBtn>인원</BottomBtn>
                </CardBottom>
            </CardItem>
        </div>
    );
}

export default Card;
