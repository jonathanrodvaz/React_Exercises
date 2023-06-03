import React from "react";
import "./Education.css";

//En el caso de la sección Education, como es un array, tendremos que mapear la información para pintar todos los datos. Al hacer esto, generaremos un item y dentro de cada item crearemos tres <p> con la información que queremos pintar. 

const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;