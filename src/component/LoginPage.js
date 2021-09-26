import Modal from "./reuse/Modal";
import {useState,useEffect} from 'react'
import styled from "styled-components";

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
                        <KakaoBtn></KakaoBtn>
                        <GoogleBtn></GoogleBtn>
                        <GithubBtn></GithubBtn>
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

`

const KakaoBtn = styled(SocialBtn)`


`

const GoogleBtn = styled(SocialBtn)`



`

const GithubBtn = styled(SocialBtn)`



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