import styles from './SnowmanForm.module.css';

function SnowmanForm(){
    return (
        <div className={styles.snowmanContainer}>
            <form className={styles.snowman}>
                <input type="text" id="snowman-name" placeholder="Snowman Name" />
                <input type="number" id="snowman-height" placeholder="Height (in centimeters)" />
                <input type="text" id="location" placeholder="Location" />
                <input type="text" id="creator-name" placeholder="Creator" />
                <select id="special-attribute" placeholder="Special Attribute">
                    <option value="" disabled selected>Special Attribute</option>
                    <option value="Carrot Nose">Carrot Nose</option>
                    <option value="Hat/Pot">Hat/Pot</option>
                    <option value="Branches for Arms">Branches for Arms</option>
                    <option value="Button Eyes">Button Eyes</option>
                </select>
                <button type="submit" className="add-btn">Add</button>
            </form>
        </div>
    );
}

export default SnowmanForm;
