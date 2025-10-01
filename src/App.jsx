import {useState} from 'react';
import SnowmanForm from "./components/SnowmanForm";
import SnowmanPreview from "./components/SnowmanPreview";
import SnowmanList from "./components/SnowmanList";

function App() {
   const [snowmanData, setSnowmanData] = useState({name: '', height: 0, location: '', creator: '', attribute: 'Special Attribute'});
   return (
      <div className="body">
         <h1>Snow Showdown</h1>
         <main id="hero">
            <SnowmanForm makeSnowman={getSnowmanData}/>
            <div className="snowballs-container">
               <SnowmanPreview snowmanMaking={snowmanData}/>
               <div className="snow">
                  <h2>&#10053;Your Snowman&#10053;</h2>
                  <ul className="snow-list"></ul>
              </div>
            </div>
         </main>
         <img id="back-img" src="./assets/back-Snowman.png" alt="" hidden />
      </div>
   );
}

export default App;
