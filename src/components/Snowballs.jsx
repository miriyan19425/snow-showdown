import Snowball from "./Snowball";
import Snow from "./Snow";
import styles from './Snowballs.module.css';

function Snowballs({snowman}){
    return (
        <div className={styles.snowballsContainer}>
           <Snowball snowman={snowman} />
           <Snow />
        </div>
    );
}

export default Snowballs;
