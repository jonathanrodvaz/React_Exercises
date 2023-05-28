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
React.useEffect(()=> {  //El useEffect lo que nos va permitir es tener disponible el ciclo de vida de nuestro componente para ejectuar funciones en distintos momentos.Este hook se lanzara siempre y cuando se haya creado el componente, es decir, cuando está montado, de tal modo que nos permite pasar info al componente y React se encargará de re-renderizar con los datos obtenidos sin bloqeuar la vista inicial al cliente web.
  (async () => {
    let data = await fetch('https://rickandmortyapi.com/api/character/').then(
      (res) => res.json()
    );
    setCharacterList(data.results);

 })();
  }, []);
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
