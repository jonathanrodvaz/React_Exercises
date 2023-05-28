import { useEffect, useState } from "react";

//Hecho solo así nos dará la hora exacta del momento en el que hagamos refresh, pero el reloj no se moverá hasta que volvamos a hacer refresh.
const Clock = () => {
  let time = new Date().toLocaleTimeString(); //Hecho solo así nos dará la hora exacta del momento en el que hagamos refresh, pero el reloj no se moverá hasta que volvamos a hacer refresh. 
  const [currentTime, setCurrentTime] = useState(time); //Tenemos que escribir el siguiente codigo para hacer que el reloj sea funcional (es decir, un reloj de verdad) en vez de que solo quede el minuto y segundo exacto del momento en el que se hace refresh.
  
  const updateTime =()=> {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000); //Con setInterval hacemos que una función (la función que metamos dentro del parentesís) se ejecute continuamente. Podemos poner dentro del parentesís el intervalo de tiempo exacto que queremos que pase entre ejecución y ejecución. NOTA: Este metodo no es recomendado porque puede causar memory leaks, puede de-sincronizarse, y en caso de incluir muchos setIntervals en un mismo proyecto esto puede causar performance issues.

  return (
    <div>
      <h1>{currentTime}</h1>
    </div> 
  )
}

export default Clock;


