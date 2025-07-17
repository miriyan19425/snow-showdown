import {useState, useEffect} from 'react';
import styles from './SnowmanForm.module.css';

const attributes = ['Special Attribute', 'Carrot Nose', 'Hat/Pot', 'Branches for Arms', 'Button Eyes'];

function SnowmanForm({addSnowman, snowmanEdit}){
    const [name, setName] = useState('');
    const [height, setHeight] = useState(0);
    const [location, setLocation] = useState('');
    const [creator, setCreator] = useState('');
    const [attribute, setAttribute] = useState(undefined);

    useEffect(() => {
        if (snowmanEdit) {
            setName(snowmanEdit.name);
            setHeight(snowmanEdit.height);
            setLocation(snowmanEdit.location);
            setCreator(snowmanEdit.creator);
            setAttribute(snowmanEdit.attribute);
        }
    }, [snowmanEdit]);

    function handleSubmit(e){
        e.preventDefault();

        if (!name || !height || !location || !creator || !attribute) return;

        const data = {name, height, location, creator, attribute};
         
        addSnowman(data);

        setName('');
        setHeight('');
        setLocation('');
        setCreator('');
        setAttribute(undefined);
    }

    return (
        <div className={styles.snowmanContainer}>
            <form className={styles.snowman} onSubmit={handleSubmit}>
                <input type="text" id="snowman-name" placeholder="Snowman Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" id="snowman-height" placeholder="Height (in centimeters)" name="height" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                <input type="text" id="location" placeholder="Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input type="text" id="creator-name" placeholder="Creator" name="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
                <select id="special-attribute" placeholder="Special Attribute" name="attribute" value={attribute} onChange={(e) => setAttribute(e.target.value)} >
                    <option value={attribute} disabled selected>Special Attribute</option>
                    <option value={attribute}>Carrot Nose</option>
                    <option value={attribute}>Hat/Pot</option>
                    <option value={attribute}>Branches for Arms</option>
                    <option value={attribute}>Button Eyes</option>
                </select>
                <button type="submit" className="add-btn">Add</button>
            </form>
        </div>
    );
}

export default SnowmanForm;
