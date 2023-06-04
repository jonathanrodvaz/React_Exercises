import React, { useEffect, useState } from 'react'; //Debemos traernos useState para que seteé la hora a traves de una función, y por otro lado debemos traernos useEffect para que recoja la hora local a traves de una función y la ejecute al cargar la pagina y al pasar a traves del intervalo de un segundo.
import './DigitalClock.css';
const DigitalClock = () => {
    const [clockState, setClockState] = useState();
  useEffect(()=>{
    setInterval(()=>{
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