import React, { useEffect, useState } from 'react'; //Debemos traernos useState para que seteé la hora a traves de una función, y por otro lado debemos traernos useEffect para que recoja la hora local a traves de una función y la ejecute al cargar la pagina y al pasar a traves del intervalo de un segundo.
import './DigitalClock.css';
const DigitalClock = () => {
  
  //Primero definimos un useState que nos setée la hora a traves de una función. 
    const [clockState, setClockState] = useState();
  
  
  //Luego con useEffect lo que hacemos es que nos recoge la hora local y la ejecuta tanto al cargar la pagina como a través del intervalo de 1 segundo.
    useEffect(()=>{
    setInterval(()=>{

      //Date recoge la información de la hora local a través de un metodo llamado 'date.toLocaleTimeString()' y el valor recogido es el que se va a aplicar a clockState mediante setClockState, cada segundo.
        const date = new Date();
        setClockState(date.toLocaleTimeString());

    }, 1000);
  }, []);
    return (
    <div className='digital-clock'>
        <h2>{clockState}</h2>
        </div>
  )
}

export default DigitalClock;