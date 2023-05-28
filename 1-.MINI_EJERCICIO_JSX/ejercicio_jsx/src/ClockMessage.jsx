import { useEffect, useState } from "react";

//Codigo original de Albert

//Anteriormente, en la linea de abajo ponía "export const Clock = () => {" pero no me estaba exportando esta función al main. En la página, por consola, me daba un error llamado "does not provide an export named default". He solucionado esto poniendolo como lo he pueto ahora, solo declarando la función y exportandola abajo con el default. 
const Clock = () => {
  const horaActual = new Date().getHours();
  const [saludo, setSaludo] = useState("");
  useEffect(()=>{
    const saludar = (hora) => {
      if(hora >= 6 && hora < 12){
        return 'Buenos días!';
      }else if (hora >= 12 && hora < 19) {
        return "Buenas Tardes!";
      }else hora >=19 && hora < 6;
      return "Buenas noches!";
    };
    setSaludo(saludar(horaActual));
  }, []) 

  return (
    <div>
      <h2>{saludo}</h2>
    </div>
  );
};


export default Clock;