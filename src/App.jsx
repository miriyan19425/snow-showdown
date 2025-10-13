import {useState} from 'react';
import SnowmanForm from "./components/SnowmanForm";
import SnowmanPreview from "./components/SnowmanPreview";
import SnowmanList from "./components/SnowmanList";

function App() {
   const [snowmanData, setSnowmanData] = useState({name: '', height: '', location: '', creator: '', attribute: 'Special Attribute'});

   function getSnowmanData(d) { setSnowmanData(d); }
   
   return (
      <div className="body">
         <h1>Snow Showdown</h1>
         <main id="hero">
            <SnowmanForm makeSnowman={getSnowmanData}/>
            <div className="snowballs-container">
               <SnowmanPreview snowmanMaking={snowmanData}/>
               <SnowmanList nextSnowman={nextSnowman} next={next} />
            </div>
         </main>
         <img id="back-img" src="./assets/back-Snowman.png" alt="" hidden />
      </div>
   );
}

export default App;
