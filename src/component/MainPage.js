import styled from "styled-components";
import GroupList from "./GroupList";

export const Container = styled.div`
                  width: 100%;
                  height: 100vh;
                  background-color:#f6f6f6;
                  display: -webkit-box;
                  display: -moz-box;
                  display: -ms-flexbox;
                  display: flex;

                 -webkit-box-align: center;
                  -moz-box-align: center;
                  -ms-flex-align: center;
                  align-items: center; /* 수직 정렬 */

                  -webkit-box-pack: center;
                  -moz-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
    `

export const Button = styled.button`

    width:200px;
    height:50px;
    background-color:rgb(84,135,255);
    border-radius:50px;
    line-height:50px;
    color:#fff;
    text-align:center;
    margin:100px 100px 0 100px;
    font-size:17px;
    font-weight:900;
    cursor:pointer;
    border:0;
    outline:0;
    
`

const MainPage = () => {

    return(
      <div>
          <Container>
              <div id="div_main_section">
                  <div id="div_main_title" style={{width:'400px', textAlign:'center',margin:'20px auto', fontSize:'80px',fontWeight:'800',color:'rgb(84,135,255)'}}>DDUDO</div>
                  <div id="div_main_sub_title" style={{width:'300px', textAlign:'center',margin:'10px auto', fontSize:'20px',wordSpacing:'3px',fontWeight:'500'}}>뚜두와 함께 시작하세요!</div>
                  <Button>시작하기</Button>
              </div>
          </Container>
              <GroupList/>
      </div>
    );
}

export default MainPage;