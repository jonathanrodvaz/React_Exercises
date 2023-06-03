import React from "react";
import "./Volunteer.css";

//En el caso de la sección Volunteer, como es un array, tendremos que mapear la información para pintar todos los datos. Al hacer esto, generaremos un item y dentro de cada item crearemos cuatro <p> con la información que queremos pintar. 

const Volunteer = ({ volunteer }) => {
  return (
    <div>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="name">👓 {item.name}</h3>
              <h4>{item.where}</h4>
              <p>{item.description}</p>           
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteer;