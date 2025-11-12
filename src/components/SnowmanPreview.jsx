function SnowmanPreview({snowmanMaking, onNext, onEdit}){
    return (
        <div className="snowball">
            <h2>&#10053;Snowman Preview&#10053;</h2>
            {(
                snowmanMaking.name !== '' &&
                snowmanMaking.height !== '' &&
                snowmanMaking.location !== '' &&
                snowmanMaking.creator !== '' &&
                snowmanMaking.attribute !== 'Special Attribute'
            ) 
            ||
            <ul className="snowman-preview">
                <li>
                    <article>
                        <p>Name: {snowmanMaking.name}</p>
                        <p>Height: {snowmanMaking.height}</p>
                        <p>Location: {snowmanMaking.location}</p>
                        <p>Creator: {snowmanMaking.creator}</p>
                        <p>Attribute: {snowmanMaking.attribute}</p>
                    </article>
                    <div className="btn-container">
                        <button className="edit-btn" onClick={onEdit}>Edit</button>
                        <button className="next-btn" onClick={onNext}>Next</button>
                    </div>
                </li> 
            </ul>      
            }  
        </div>
    );
}

export default SnowmanPreview;
