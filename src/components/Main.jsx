import {useState} from 'react';
import SnowmanForm from "./SnowmanForm";
import Snowballs from "./Snowballs";

function Main(){

    const [snowmanData, setSnowmanData] = useState({});
    const [dataToEdit, setDataToEdit] = useState({});
    const [next, setNext] = useState(false);
    const [nextSnowman, setNextSnowman] = useState({});

    function getSnowmanData(d){
        setSnowmanData(d);
    }

    return (
        <main className="hero">
           <SnowmanForm addSnowman={getSnowmanData}/>
           <Snowballs snowman={snowmanData}/>
        </main>
    );
}

export default Main;
