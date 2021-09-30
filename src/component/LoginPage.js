import Modal from "./reuse/Modal"
import {useState,useEffect} from 'react'
import styled from "styled-components"
import {ReactComponent as Kakao_Login} from "../assets/svgicon/kakaotalk.svg"
import {ReactComponent as Google_Login} from "../assets/svgicon/google.svg"
import {ReactComponent as Github_Login} from "../assets/svgicon/github.svg"
const { Kakao } = window;

const LoginPage = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }

    const socialLogin = (social) => {

        Kakao.Auth.login({
            success: function(authObj) {

                console.log(authObj)
                Kakao.API.request({
                    url: '/v2/user/scopes',
                    success:function(res){
                        console.log('동의항목보기',res)
                    },
                    fail:function(res){
                        console.log('fail',res)
                    }
                });

                //동의 항목 가져오기
                Kakao.API.request({
                    url:'/v2/user/me',
                    data:{
                        property_keys:["kakao_account.profile","kakao_account.email","kakao_account.gender","kakao_account.age"]
                    },
                    success:function(res){
                        console.log('동의항목',res);

                        fetch(`http://test.ddudo.com/v1/user/signup?user_social=${social}`,{
                            method:'post',
                            mode: 'cors',
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Credentials':'true'
                            },
                            body: {
                                "user_email": res.kakao_account.email,
                                "user_token": authObj.access_token,
                                "user_nickname": res.kakao_account.profile.nickname
                            }
                        }).then((res) => {
                            console.log("success:", res);
                        })
                    },
                    fail:function(res){
                        console.log(res)
                    }
                })


            },
            fail: function(err) {
                alert(JSON.stringify(err))
            },
        })

    }

    return (
        <>
            <Button onClick={openModal}>Start!</Button>
            <p style={{display:'none'}}>Kakao.init({process.env.REACT_APP_KAKAO_JS_API_KEY})</p>
            {
                modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}>
                    <LoginSection>
                        <LoginTitle>LOGIN</LoginTitle>
                        <LoginContent>환영합니다!</LoginContent>
                        <div>
                            <KakaoBtn id="kakao_bn" onClick={(e) => socialLogin('kakao')}><Kakao_Login width="50px" height="50px"/></KakaoBtn>
                            <GoogleBtn onClick={(e) => console.log('google')}><Google_Login width="50px" height="50px"/></GoogleBtn>
                            <GithubBtn onClick={(e) => console.log('github')}><Github_Login width="50px" height="50px" fill="#fff"/></GithubBtn>
                        </div>
                    </LoginSection>
                </Modal>
            }
        </>
    )
}

const LoginSection = styled.div`

    
`

const LoginTitle = styled.div`

    height:60px;
    width:100%;
    text-align:center;
    font-size:50px;
    font-weight:700;
    color:rgb(84,135,255);     
     

`

const LoginContent = styled.div`

    height: 40px;
    margin-bottom:20px;
    width:100%;
    text-align:center;
    font-size:20px;
    font-weight:500;

`

const SocialBtn = styled.button`

    width:calc(90%/3);
    height:130px;
    margin: 0 calc(10%/6);
    float:left;
    outline:0;
    border:0;
    cursor:pointer;
    border-radius:10px;
    transition: 0.2s linear;
    
    
    &:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

`

const KakaoBtn = styled(SocialBtn)`

    background-color:#f9e000;

`

const GoogleBtn = styled(SocialBtn)`

    background-color:#fff;
        
    
`

const GithubBtn = styled(SocialBtn)`

    background-color:#000;
    
`


const Button = styled.button`

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

export default LoginPage