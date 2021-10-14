import styles from '../styles/grouplist.module.css'
import Groupcard from "./groupcard";

const Grouplist = () => {

    return(
        <>
            <div className={styles.maincontainer}>
                <Groupcard/>
            </div>

        </>
    );
}

export default Grouplist

