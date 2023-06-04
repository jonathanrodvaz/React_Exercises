import { useState } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  //Con esta constante haremos que el input recoja los nombres de los Pokémon de la PokeApi y los setee en una constante llamada pokemonName. 
  const [pokemonName, setPokemonName] = useState("");
  
  //Con este useState nos encargamos de que no se muestre nada cuando aun no se ha escrito un pokemon valido en el input. De lo contrarío siempre mostraría por defecto las caracterítiscas como Name, Species, etc. De esta manera, mientras no haya pokemon en el input, no se mostrarán tal información.
  const [pokemonChosen, setPokemonChosen] = useState(false) 
  
  //Esta useState se encarga de setear la info de Pokemon y lo que queremos que saque con cada consulta a la API hecha a través de nuestro input por parte del usuario.
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  //Es con esta función que vamos a manejar la busqueda de los pokemon, sacando la info que le pedimos de la PokeApi. Como el url de la pokeapi funciona con los nombres al final de la url, tras '/pokemon/', entonces le vamos a pasar por ahí a pokemonName. Y también abajo pasamos pokemonName como el nombre del pokemon que se haya introducido en el input y se haya encontrado.
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
	      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
					type: res.data.types[0].type.name,
        });
        setPokemonChosen(true); //setPokemonChosen se pone en true una vez ejecutada, para indicarnos que un pokemon del buscador ha sido seleccionado. 
      }
    );
  };


//Linea 50: Es a través de este evento que hacemos que el input recoja los nombres de los pokemons de la API y los setee en pokemonName
//Linea 52: Con esta linea de codigo forzamos a que lo introducido en el input se escriba en minusculas. Se da un error común a la hora de utilizar esta API, y es que si se buscan Pokemon's con la primera letra en Mayusculas no aparecen resultados, porque en el JSON esta todo escrito en minúsculas. Esta linea de codigo prevée esta situación.
//Linea 57. Este ternario maneja el estado por defecto de la app, mostrando un mensaje que nos pide que seleccionemos un pokemon. Tambien se encarga del supuesto que el pokemon introducido en el input sea incorrecto o no existente.
return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
          setPokemonName(event.target.value); 
          }}
        value={pokemonName.toLowerCase()} 
        />
       <div>
	{pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
</div>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1> Please choose a Pokémon </h1>   
        ) : (
          <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
            <h3>Number: #{pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
            </>
        )}
      </div>
    </div>
  )
}

export default App
