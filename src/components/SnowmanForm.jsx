import {useState, useEffect} from 'react';

const specialAttributes = ["Special Attribute", "Carrot Nose", "Hat/Pot", "Branches for Arms", "Button Eyes"];

function SnowmanForm({makeSnowman}){
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [location, setLocation] = useState('');
    const [creator, setCreator] = useState('');
    const [attribute, setAttribute] = useState("Special Attribute");

    useEffect();

    function handleSubmit(e){
        e.preventDefault();

        if (!name || !height || !location || !creator || attribute === "Special Attribute") return;

        const data = {name, height, location, creator, attribute};

        makeSnowman(data);

        setName('');
        setHeight('');
        setLocation('');
        setCreator('');
        setAttribute("Special Attribute");
    }
    
    return (
        <div className="snowman-container">
        <form className="snowman">
          <input type="text" id="snowman-name" placeholder="Snowman Name" />
          <input type="number" id="snowman-height" placeholder="Height (in centimeters)" />
          <input type="text" id="location" placeholder="Location" />
          <input type="text" id="creator-name" placeholder="Creator" />
          <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
              {specialAttributes.map( (attr, ind) => <option key={ind} value={attr} disabled={ind === 0}>{attr}</option> )}    
          </select>
          <button className="add-btn">Add</button>
        </form>
      </div>
    );
}

export default SnowmanForm;
