import React from 'react'
import { Link } from 'react-router-dom'

export const CardPokemon = ({ pokemon }) => {
  return (
    <div className=''>
      <div className='card-img'>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className='card-info'>
        <span className='pokemon-id'># {pokemon.id}</span>
        <center><h3> {pokemon.name}</h3></center>
        <div className='card-types'>
          {/* {
        pokemon.types.map(type => (
          <span key={type.type.name} className={type.type.name}>
            { type.type.name }
          </span>
        ))
      } */}
          <Link to={`/pokemon/${pokemon.id}`}>
            <button className='btnVerPerfil'>Ver Perfil</button>
          </Link>
        </div>

      </div>
    </div>




  )
}
