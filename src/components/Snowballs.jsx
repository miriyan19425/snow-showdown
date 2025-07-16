import Snowball from "./Snowball";
import Snow from "./Snow";
import styles from './Snowballs.module.css';

function Snowballs({snowman, nextSnowman, handleEdit, handleNext, next}){
    return (
        <div className={styles.snowballsContainer}>
           <Snowball snowman={snowman} onEdit={handleEdit} onNext={handleNext} />
           <Snow nextSnowman={nextSnowman} next={next}/>
        </div>
    );
}

export default Snowballs;
