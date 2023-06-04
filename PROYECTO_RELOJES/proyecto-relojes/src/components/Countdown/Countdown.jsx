import React, {useState, useEffect } from 'react'
import './Countdown.css';
const Countdown = () => {

  //Usamos este useState para definir y setear el tiempo dentro de la constante 'time'
    const [time, setTime] = useState("");
    
    //Este useEffect nos sirve para hacer que la variable countDownDate nos recoja el valor del tiempo en milisegundos de una fecha que le indiquemos, en este caso yo le he indicado la fecha de finalización del bootcamp para dotar a este proyecto de un tinte dramatico.
    useEffect(()=>{
        let countDownDate = new Date('June 30, 2023 22:00:00').getTime();
        
        //Aquí insertamos un intervalo que hará que la función getTime() se ejecute segundo a segundo. 
        let x = setInterval(()=>{
            let now = new Date().getTime();
            
            //Y más abajo a continuación nos encargamos de que se pueda calcular la distancia entre now(fecha actual) y countDownDate (la fecha meta de la cuenta atrás)
            let distance = countDownDate - now;
            //A continuación comenzamos a desglosar el tiempo obtenido en dias, horas, minutos y segundos.
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            //Aqui estamos concatenando todas las variables de tiempo que hemos creado ahí arriba para setear el tiempo.
            setTime(days + 'd ' + hours + 'h ' + seconds + 's ');
        
            //Esta linea de codigo nos lanzará un mensaje cuando la cuenta atrás termine.
            if (distance < 0) {
                clearInterval(x);
                setTime("ENHORABUENA! HAS LOGRADO SUPERAR EL BOOTCAMP DE PROGRAMACIÓN FULL-STACK! :)");
            }
        }, 1000)
    }, []);
  return (
    <div className='countdown'>
      <h2>The Full-Stack Developer Bootcamp will end in...</h2>
      <h3>{time}</h3>
    </div>
  )
}

export default Countdown;