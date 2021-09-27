import Modal from "./reuse/Modal"
import {useState,useEffect} from 'react'
import styled from "styled-components"
import {ReactComponent as Kakao} from "../assets/svgicon/kakaotalk.svg"
import {ReactComponent as Google} from "../assets/svgicon/google.svg"
import {ReactComponent as Github} from "../assets/svgicon/github.svg"



const LoginPage = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <>
            <Button onClick={openModal}>Start!</Button>
            {
                modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}><LoginSection>
                    <LoginTitle>DDUDO와 함께 시작하세요!</LoginTitle>
                    <div>
                        <KakaoBtn><Kakao width="50px" height="50px"/></KakaoBtn>
                        <GoogleBtn><Google width="50px" height="50px"/></GoogleBtn>
                        <GithubBtn><Github width="50px" height="50px" fill="#fff"/></GithubBtn>
                    </div>
                </LoginSection></Modal>
            }
        </>
    )
}

const LoginSection = styled.div`

    

`

const LoginTitle = styled.div`

    height: 40px;
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