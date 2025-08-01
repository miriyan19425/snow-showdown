import SnowmanForm from "./components/SnowmanForm";

function App() {
   return (
      <div className="body">
         <h1>Snow Showdown</h1>
         <main id="hero">
            <SnowmanForm />
            <div className="snowballs-container">
               <div className="snowball">
                  <h2>&#10053;Snowman Preview&#10053;</h2>
                  <ul className="snowman-preview"></ul>
               </div>
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
