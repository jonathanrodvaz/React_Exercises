import React from 'react';
import './App.css'


  const charactersMock = [
    {
      id: 1,
      name:"Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  const myState = React.useState(charactersMock); //myState es un array que en su primer valor tiene un “getter” con los datos que le hemos pasado, charactersMock, y como segundo es un “setter” que nos permite realizar  cambios, por ello podemos hacer destructuring y hacerlo así más sencillo de entender y usar.
const [characterList, setCharacterList] = React.useState(charactersMock);
  const characters = myState[0];
  const charactersSet = myState[1];

  //Haremos un map de characters para pintarlos en el dom.
  //añadimos 'key={character.id}' para generar una key unica en cada elemento. Las key son una información adicional que podemos añadir a nuestros elementos de React para gestionar adecuadamente su ordenación en listas dinámicas sin crear bugs inesperados. 
  return (
    <>
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>id: {character.id}</h2>
          <h2>name: {character.name}</h2>
          <h2>status: {character.status}</h2>
        </div>
      ))}
    </>
  );
};
    


export default App
