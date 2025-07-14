import styles from './Snow.module.css';

function Snow({nextSnowman, next}){
    return (
        <div className={styles.snow}>
          <h2>&#10053;Your Snowman&#10053;</h2>
          <ul className={styles.snowList}></ul>
        </div>
    );
}

export default Snow;
