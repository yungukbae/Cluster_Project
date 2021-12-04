import Head from 'next/head'
import styles from '../styles/signin.module.css'
const Signin = () => {

    return(
        <>
            <Head>
                <title>DDUDO</title>
                <meta name="description" content="DDUDO와 함께 시작하세요!" />
            </Head>

            <div className={styles.topcontainer}>
                <div className={styles.middlelogo}>
                    <div className={styles.ddudo}>DDUDO</div>
                    <div className={styles.ddudodes}>뚜두와 함께 시작하세요!</div>
                </div>
                <div className={styles.topbtn}><button>로그아웃</button><button>프로필 설정</button></div>
            </div>

            <div className={styles.maincontainer}>
                <div className={styles.welcometext}>반갑습니다! 김갑수님!</div>
                <div className={styles.mainbtncontainer}>
                    <div className={styles.btngroup} style={{backgroundColor:'#fff'}}>
                        <div className={styles.btnlogo}><img src="./main_logo_svg/joingrouplogo.svg" width="90px" height="90px"/></div>
                        <div className={styles.btnmaintext} style={{color:'rgb(84,135,255)'}}>JOIN GROUP</div>
                        <div className={styles.btnsubtext}>생성된 그룹에 참가하기</div>
                    </div>
                    <div className={styles.btngroup} style={{backgroundColor:'rgb(84,135,255)'}}>
                        <div className={styles.btnlogo}><img src="./main_logo_svg/creategrouplogo.svg" width="90px" height="90px"/></div>
                        <div className={styles.btnmaintext} style={{color: '#fff'}}>CREATE GROUP</div>
                        <div className={styles.btnsubtext}>그룹 생성하기</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signin