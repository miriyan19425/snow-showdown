function SnowmanPreview({snowman, onEdit, onNext}){
    return (
        <div className="snowball">
          <h2>&#10053;Snowman Preview&#10053;</h2>
          <ul className="snowman-preview">
            {(
                snowman.name !== '' &&
                snowman.height !== '' &&
                snowman.location !== '' &&
                snowman.creator !== '' &&
                snowman.attribute !== undefined
              )&&
              <li>
                <article>
                  <p>Name: {snowman.name}</p>
                  <p>Height: {snowman.height}</p>
                  <p>Location: {snowman.location}</p>
                  <p>Creator: {snowman.creator}</p>
                  <p>Attribute: {snowman.attribute}</p>
                </article>
                <div className="btn-container">
                  <button onClick={onEdit}>Edit</button>
                  <button onClick={onNext}>Next</button>
                </div>
              </li> 
            }  
          </ul>
        </div>
    );
}

export default SnowmanPreview;
