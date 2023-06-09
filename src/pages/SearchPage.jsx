import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from '../componentes/CardPokemon'

export const SearchPage = () => {
  const location = useLocation();
  const { globalP } = useContext(PokemonContext);

  const pokemonFiltrado = globalP.filter(pokemon =>
    pokemon.name.includes(location.state.toLowerCase()));

  return (
    <>
      <div className='container'>
      <p className='p-search'>
        Se encontraron: <span>{pokemonFiltrado.length}</span>
      </p>

      <div className='card-list-pokemon container'>
        {
          pokemonFiltrado.map(pokemon => 
          (
            <CardPokemon pokemon={pokemon } key={pokemon.id}/>
          ))
        }
      </div>
    </div>
    </>
    
  )
}
