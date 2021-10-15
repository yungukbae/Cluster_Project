import styles from '../styles/groupcard.module.css'

const Groupcard = () => {

    return(
     <>
        <div className={styles.maincontainer}>
            <div className={styles.cardtype}>창업</div>
            <div className={styles.carlogo}><img src="./subj_logo_svg/react.svg" alt=""/></div>
            <div className={styles.cardexp}>하루전</div>
            <div className={styles.cardtitle}>저희와 함께 폭풍성장할 팀원을 구합니다.</div>
            <div className={styles.cardtag}><p>#react</p> <p>#frontend</p> <p>#javascript</p></div>
            <div className={styles.cardstatuscontainer}>
                <div className={styles.statuscnt}><img src="./card_state_logo/viewcnt.svg" alt=""/>23</div>
                <div className={styles.statuscnt}><img src="./card_state_logo/commentcnt.svg" alt=""/>1</div>
                <div className={styles.statuscnt}><img src="./card_state_logo/likecnt.svg" alt=""/>91</div>
            </div>
        </div>
     </>
    )
}

export default Groupcard