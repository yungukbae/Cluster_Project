import styles from '../styles/grouplist.module.css'
import Groupcard from "./groupcard";



const Grouplist = () => {

    const data = {
        id: 12,
        type: '창업',
        exp:'이틀전',
    }

    return(
        <>
            <div className={styles.maincontainer}>
                <Groupcard data={data}/>
            </div>

        </>
    );
}

export default Grouplist

