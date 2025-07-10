import Snowball from "./Snowball";
import Snow from "./Snow";
import styles from './Snowballs.module.css';

function Snowballs(){
    return (
        <div className={styles.snowballsContainer}>
           <Snowball />
           <Snow />
        </div>
    );
}

export default Snowballs;
