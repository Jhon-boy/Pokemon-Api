import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon'
import { Loader } from './Loader';

export const PokemonList = () => {
  const { allPokemon, carga, filterPokemon } = useContext(PokemonContext);


  return (
    <>
      {
        carga ? (
          <Loader />
        ) : (
          <div className='card-list-pokemon container'>
            {
              filterPokemon.length ? (
                <>
                  {
                    filterPokemon.map(pokemon => (
                      <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))
                  }
                </>

              ) : (
                <>
                  {
                    allPokemon.map(pokemon => (
                      <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))
                  }
                </>

              )
            }

          </div>
        )
      }

    </>
  )
}
