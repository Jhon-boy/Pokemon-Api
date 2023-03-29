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
      <div className='formSearch'>
        <div className='container-filter container'>
        </div>
        <form onSubmit={onSearchSubmit} className='formS'>
          <div className='form-group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='icon-search'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='search'
              name='valueSearch'
              id=''
              value={valueSearch}
              onChange={imputChange}
              placeholder='Buscar nombre de pokemon'
            />
          </div>

          <button className='btn-search'>Buscar</button>
        </form>
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
