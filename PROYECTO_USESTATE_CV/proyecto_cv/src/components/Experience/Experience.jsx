import React from "react";
import "./Experience.css";

//En el caso de la sección Experience, como es un array, tendremos que mapear la información para pintar todos los datos. Al hacer esto, generaremos un item y dentro de cada item crearemos cuatro <p> con la información que queremos pintar. 

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📂 {item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;