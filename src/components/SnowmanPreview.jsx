function SnowmanPreview({snowmanMaking}){
    return (
        <div className="snowball">
          <h2>&#10053;Snowman Preview&#10053;</h2>
          <ul className="snowman-preview">
            {(
                snowmanMaking.name !== '' &&
                snowmanMaking.height !== '' &&
                snowmanMaking.location !== '' &&
                snowmanMaking.creator !== '' &&
                snowmanMaking.attribute !== undefined
              )&&
              <li>
                <article>
                  <p>Name: {snowmanMaking.name}</p>
                  <p>Height: {snowmanMaking.height}</p>
                  <p>Location: {snowmanMaking.location}</p>
                  <p>Creator: {snowmanMaking.creator}</p>
                  <p>Attribute: {snowmanMaking.attribute}</p>
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
