import React, { useContext } from 'react'
import { PokemonList, FilterBar } from '../componentes'
import { PokemonContext } from '../context/PokemonContext'

export const Home = () => {
  const { onClickLoadMore } = useContext(PokemonContext);
 

  return (
    <>
      <PokemonList />
      <FilterBar />
      <div className='container-btn-load-more container'>
        <button className='btn-load-more'
          onClick={onClickLoadMore}
        >
          Cargar mas
        </button>
      </div>
    </>

  )
}
