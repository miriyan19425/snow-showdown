import Main from "./Main";
import styles from './Body.module.css';

function Body(){
    return (
        <div className={styles.body}>
            <h1>Snow Showdown</h1>
            <Main />
        </div>
    );
}

export default Body;
