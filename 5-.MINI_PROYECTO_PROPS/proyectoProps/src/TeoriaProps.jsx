/*
import React from "react";
import { Greeting } from "./components";
import "./App.scss";

const App = () => {

  const name = "Siegmeyer of Catarina"; //!Esto es la prop. El componente 'name' es la prop. Que más abajo pasamos en la linea 11, en {name}
  
  return (
    <div className="App">
     <Greeting name={name}/>  //! Aquí le estamos pasando la prop
    </div>
  );
};

export default App;

//?--------------------------------------------------------------------------------------------------------------------------------------
import React from "react";

const Greeting = (props) => { //Mientras que arriba hemos creado la prop en el elemento padre, aquí ya en el elemento hijo lo estamos inyectando.
  return (
    <div>
      <p>Hello {props.name}!</p> //Tendríamos que escribir props.name para sacar el nombre.
    </div>
  );
};

export default Greeting;

//?---------------------------------------------------------------------------------------------------------------------------------------
import React from "react";

const Greeting = (props) => {
  const { name } = props; //Otra manera más limpia de hacer lo de ahí arriba es mediante destructuring. De esta manera solo tenemos que llamar a name, en vez de escribir 'props.name'
  return (
    <div>
      <p>Hello {name}!</p>
    </div>
  );
};

export default Greeting;

*/