import styles from '../styles/404.module.css'

const Custom404 = () => {



    return(
        <>
            <div className={styles.topcontainer}>
                <div className={styles.middlelogo}>
                    <div className={styles.ddudo}>DDUDO</div>
                    <div className={styles.ddudodes}>뚜두와 함께 시작하세요!</div>
                </div>
            </div>
            <div className={styles.middlecontainer}>
                <div className={styles.wronglogo}><img src="./404_logo_svg/wrong_sign.svg" alt="No Img" /></div>
                <div className={styles.infotext}> 잘못된 경로 입니다.</div>
                <div className={styles.timetext}>5초후 메인 페이지로 이동됩니다...</div>
            </div>
        </>
    )
}

export default Custom404