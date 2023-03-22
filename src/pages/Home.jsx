import React, { useContext } from 'react'
import { PokemonList, FilterBar } from '../componentes'
import { PokemonContext } from '../context/PokemonContext'


export const Home = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);
  return (
    <>
      <div className='container-filter container'>
        <div className='icon-filter' onClick={() => setActive(!active)}>

          <span>
            Filtar
          </span>

        </div>
      </div>
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
