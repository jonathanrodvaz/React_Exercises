import React from 'react'
import './Figure.css'
//Este componente, 'Figure', se encarga de pintar los datos que nos traemos de la API. Asi pues, aqui es donde pintamos la imagen, la explicación, junto con títulos y fechas y copyright de la fotografía. 
const Figure = ({ data }) => {
    return (
      <figure>
        <img src={data.url} alt={data.title} />
        <div className="window">
          <div className="title-bar">
            <button aria-label="Close" className="close"></button>
            <h1 className="title">{data.title}</h1>
            <button aria-label="Resize" className="resize"></button>
          </div>
          <div className="details-bar">
            <span>{data.date}</span>
            <span>{data.copyright}</span>
          </div>
          <div className="window-pane">{data.explanation}</div>
        </div>
      </figure>
    );
  };

export default Figure;