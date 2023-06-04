import { useState, useEffect } from 'react'
import axios from "axios";
import Figure from './Figure';
import './App.css'

function App() {

  //Con la siguiente linea de codigo recuperaremos la fecha actual en un formato estandar ISO, que consiste en Año-Mes-Dia
const today = new Date(Date.now()).toISOString().slice(0, 10);

//Aqui creamos una variable de estado llamada apod que inicializamos como un objeto vacio.
const [apod, setApod] = useState({});

//Y aquí creamos la variable de estado llamada date con la fecha del día actual.
const [date, setDate] = useState(today);

//Almacenamos en una constante la URL de la api que consultaremos, la api de la NASA
const NASA_URL = "https://api.nasa.gov/";

//Aquí almacenamos la API_KEY que nos ha proporcionado la api de la NASA, se recomienda hacer esto en una variable de entorno.
const NASA_API_KEY = "DViwA3nD9qGEsYx9dXKM3mjAPNXtTAeRHMOvvGtG";

//El efecto del renderizado será hacer una petición de tipo get a la URL de la NASA utilizando la query de la fecha con el valor de date y añadiéndole al final la API Key tal como indica en la documentación.

//Crearemos una función que setee la fecha a través de un input en el formato necesario (igual que el formato de today)
const handleInput = (ev) => {
  setDate(ev.target.value.toLocaleString());
};

//Una vez realizada la petición, se setea el data en Apod y le indicamos en el array de dependencias que no vuelva a lanzar el efecto hasta que cambie el estado de 'date'.
  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}` //Aqui es donde insertamos la base URL y la Key de acceso a la api.
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

//A continuación pintaremos en la página todos los datos que sacamos de la NASA API. Entre todo esto encontraremos un ternario que se encargará de lanzar un mensaje en caso de que el usuario seleccione un día en el calendarío que no corresponde ni a la fecha actual, ni a fechas anteriores.
    return (
      <div className="App">
        {/* <h2 className="title">
          NASA API <img src={logo} className="logo" alt="NASA LOGO" />
        </h2> */} {/*Esta linea de codigo no funciona. Si se incorpora, la aplicación entera no renderiza. En la Api no parece haber ningún logo que traernos */}
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" id="photo-date" onChange={handleInput} />
        {date > today ? (
          <h2>Please choose a previous date</h2>
        ) : (
          <Figure data={apod} />
        )}
        <div className="standard-dialog center">
          <h1 className="dialog-text">Jonathan Rodríguez - 2023 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
        </div>
      </div>
    );
  
}

//Además de todo lo que vemos aquí en materia de codigo, en el propio documento HTML estamos exportando un estilo css customizado para darle una apariencia retro-Apple a nuestra app. Esto puede encontrarse en la linea 5 del index.html

export default App
