import styles from '../styles/groupcard.module.css'

const Groupcard = () => {

    return(
     <>
        <div className={styles.maincontainer}>
            <div className={styles.cardtype}>창업</div>
            <div className={styles.carlogo}><img src="" alt=""/></div>
            <div className={styles.cardexp}></div>
            <div className={styles.cardtitle}></div>
            <div className={styles.cardtag}></div>
            <div className={styles.cardstatuscontainer}>
                <div className={styles.viewcnt}></div>
                <div className={styles.commentcnt}></div>
                <div className={styles.likecnt}></div>
            </div>
        </div>
     </>
    )
}

export default Groupcard