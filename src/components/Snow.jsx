function Snow({nextSnowman, next}){
    return (
        <div className={styles.snow}>
          <h2>&#10053;Your Snowman&#10053;</h2>
          <ul className={styles.snowList}>
              {
              next &&
              <li>
                <article>
                  <p>Name: {nextSnowman.name}</p>
                  <p>Height: {nextSnowman.height}</p>
                  <p>Location: {nextSnowman.location}</p>
                  <p>Creator: {nextSnowman.creator}</p>
                  <p>Attribute: {nextSnowman.attribute}</p>
                  <button>Send</button>
                </article>
              </li>
            }
          </ul>
        </div>
    );
}

export default Snow;
