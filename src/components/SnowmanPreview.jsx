function SnowmanPreview({snowmanMaking}){
    return (
        <div className="snowball">
            <h2>&#10053;Snowman Preview&#10053;</h2>
            {(
                snowmanMaking.name !== '' &&
                snowmanMaking.height !== '' &&
                snowmanMaking.location !== '' &&
                snowmanMaking.creator !== '' &&
                snowmanMaking.attribute !== undefined
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
                        <button className="edit-btn">Edit</button>
                        <button className="next-btn">Next</button>
                    </div>
                </li> 
            </ul>      
            }  
        </div>
    );
}

export default SnowmanPreview;
