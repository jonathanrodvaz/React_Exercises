import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx"
import Education from "./components/Education/Education.jsx"
import Experience from "./components/Experience/Experience.jsx"
//import AboutMe from "./components/About/About.jsx"
import Habilities from "./components/Habilities/Habilities.jsx"
import Languages from "./components/Languages/Languages.jsx"
import Volunteer from "./components/Volunteer/Volunteer.jsx"
import { CV } from "./CV/CV";

const { hero, education, experience, about, languages, habilities, volunteer } = CV;  //Realizamos aqui un destructuring de 'CV' para poder acceder directamente a todas sus partes (Como Experience, Habilities, etc). Así, podremos pasar estos elmentos por props 

function App() {
  const [showEducation, setShowEducation] = useState(true); //Creamos esta constante para poder cambiar el estado y asignarle dos botones que nos enseñarán el apartado Education según los clickemos. Mas abajo insertaremos los botones.
  
  return (
    <div className='App'>
      <Hero hero={hero} />
      {/* <AboutMe about={about} /> */}
      <button 
      className='custom-btn btn-4'
      onClick={() => setShowEducation(true)}
      >
        Education
      </button> 
      <button 
      className='custom-btn btn-4'
      onClick={() => setShowEducation(false)}
      >
        Experience
        </button>
      
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        
        )}
        
        
      </div>
      
      <Languages languages={languages}/>
      <Habilities habilities={habilities} />
      <Volunteer volunteer={volunteer} />
    </div>
  )
}

export default App
