import React from 'react'
import { primerMayuscula } from '../Opciones/ConfigsPage'

export const InfoPokemon = ({ pokemon }) => {
  return (
    <div className='info-review'>
      <center><h3 className='pokemon-name'>{primerMayuscula(pokemon.name)}</h3></center>
      <div className='card-img-2'>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className='card-infor'>
        <div>
          <h1 className='titles'>{pokemon.id}</h1>
          <h6 className='sub-titles'>ID</h6>
        </div>

        <div >
        <h1 className='titles'>
         {pokemon.base_experience}
        </h1>
          
          <h6 className='sub-titles'>Experiencia</h6>
        </div>
        <div>
          <h1 className='titles'>{pokemon.id}</h1>
          <h6 className='sub-titles'>Id</h6>
        </div>

      </div>
      <div className='card-infor'>

        <div>
          <h1 className='titles'>{pokemon.height}</h1>
          <h6 className='sub-titles'>Altura</h6>
        </div>

        <div>
          <h1 className='titles'>{pokemon.order}</h1>
          <h6 className='sub-titles'>Orden</h6>
        </div>

        <div>
          <h1 className='titles'>85</h1>
          <h6 className='sub-titles'>Peso</h6>
        </div>
      </div>
    </div>
  )
}
