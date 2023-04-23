import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { InfoPokemon } from './InfoPokemon'
import {BsXCircleFill } from 'react-icons/bs'
import { primerMayuscula } from '../Opciones/ConfigsPage';
export const CardPokemon = ({ pokemon }) => {
  const [modalShow, setModalShow] = useState(false);

  function MydModalWithGrid(props) {
    return (
      <div className='show-D'>
        <Modal {...props}  size="sm" >
        <Modal.Body className="show-grid showP">
          <Container>
            <InfoPokemon pokemon={pokemon} key={pokemon.id} />
          </Container>
          {/* <Button onClick={props.onHide}>Close</Button> */}
         <center> <BsXCircleFill className='iconClose' onClick={props.onHide} style={{color: 'red' ,fontSize: '45px' }} /> </center> 
        </Modal.Body>
        
      </Modal>
      </div>
      
    );
  }

  return (
    <>
      <div className=''>
        <span className='pokemon-id'># {pokemon.id}</span>
        <div className='card-img' onClick={() => setModalShow(true)}>
          <img onClick={() => setModalShow(true)}
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className='card-info'>
          <center><h3> {primerMayuscula(pokemon.name)} </h3></center>
          <div className='card-types'>
            <Link to={`/pokemon/${pokemon.id}`}>
              <button className='btnVerPerfil'>Ver Perfil</button>
            </Link>
          </div>
          <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />


        </div>
      </div>
    </>
  )
}
