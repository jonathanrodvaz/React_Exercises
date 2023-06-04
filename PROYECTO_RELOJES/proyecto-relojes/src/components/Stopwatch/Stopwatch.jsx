import React, { useState, useEffect } from 'react'

const Stopwatch = () => {

    //Aqui declaramos la constante time, junto a su setTime.
  const [time, setTime] = useState(0);

    //Aqui llamamos al timerOn, es decir la activación del crónometro, que por defecto setearemos a 'false' para que no se active al arrancar la aplicación.
  const [timerOn, setTimerOn] = useState(false);
  useEffect(() => {
    let interval = null;

    if (timerOn) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);

        }, 10);

    }else{
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  //En los siguientes 3 <span> que tenemos más abajo se han incluido una serie de particularidades que dan forma al cronometro. Para empezar, se ha incluido un '0' al principio para mostrar los valores iniciales previos a activar el cronometro. Despues, para calcular los minutos se debe dividir el tiempo entre '60000' (pues hay 60 segundos en un minuto, 60000 milisegundos es decir). Luego usamos '%' para retornar el restante. Y finalmente se utiliza el '.slice' para ocultar el exceso que sea da cuando tenemos el valor máximo de las dos cifras, creando el efecto de pasar los valores de un <span> a otro de derecha a izquierda.
    return (
    <div className='stopwatch'>
        <h2>{time}</h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    <div id='buttons'>
        {!timerOn && time === 0 && (
            //A continuación creamos los siguientes botones para controlar el cronometro. Estos botones serán Start(Hace que setTimerOn pase a 'true'), Stop(Hace que setTimerOn vuelva a 'false'), Reset(Seteará la const time a 0 de nuevo.) y Resume(Similar a start, reanuda el cronometro).
            //Con las siguientes lineas de codigo, que encontraremos entre los botones, nos encargamos de establecer que el boton 'Stop' aparecerá una vez timerOn sea true y el valor time sea mayor que '. Pero Resume y reset solo aparecerán cuando el timerOn esté en false y time sea mayor que cero.
            <button onClick={() => setTimerOn(true)}>Start</button>
            )}
            {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
            {!timerOn && time > 0 && (
                <button onClick={() => setTime(0)}>Reset</button>
            )}
            {!timerOn && time > 0 && (
                <button onClick={() => setTimerOn(true)}>Resume</button>
            )}
    </div>
    </div>
  )
}

export default Stopwatch