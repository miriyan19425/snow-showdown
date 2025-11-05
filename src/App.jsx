import {useState} from 'react';
import SnowmanForm from "./components/SnowmanForm";
import SnowmanPreview from "./components/SnowmanPreview";
import SnowmanList from "./components/SnowmanList";
import SnowmanSent from "./components/SnowmanSent";

function App() {
   const [snowmanData, setSnowmanData] = useState({name: '', height: '', location: '', creator: '', attribute: 'Special Attribute'});
   const [dataToEdit, setDataToEdit] = useState({});
   const [next, setNext] = useState(false);
   const [nextSnowman, setNextSnowman] = useState({});
   const [sending, setSending] = useState(false);

   function getSnowmanData(d) { setSnowmanData(d); }

   function getDataToNext(){
      setNext(prev => !prev);
      setNextSnowman(snowmanData);
      setSnowmanData({name: '', height: '', location: '', creator: '', attribute: 'Special Attribute'});
   }

   function getDataToEdit(){
      setDataToEdit(snowmanData);
      setSnowmanData({name: '', height: '', location: '', creator: '', attribute: 'Special Attribute'});
   }
   
   return (
      <div className="body">
         <h1>Snow Showdown</h1>
         {
            sending ? <SnowmanSent onBack={() => setSending(prev => !prev)}/>  :
            (<main id="hero">
               
            </main>)
         }
      </div>
   );
}

export default App;
