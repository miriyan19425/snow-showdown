import styles from './Snowball.module.css';

function Snowball(){
    return (
        <div className={styles.snowball}>
          <h2>&#10053;Snowman Preview&#10053;</h2>
          <ul className={styles.snowmanPreview}></ul>
        </div>
    );
}

export default Snowball;
