import React, { useContext } from 'react'
import { PokemonList, FilterBar } from '../componentes'
import { PokemonContext } from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const { onClickLoadMore, imputChange, valueSearch, onResetForm } = useContext(PokemonContext);
  const navigate = useNavigate();
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch
    });
    onResetForm();
  }

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
