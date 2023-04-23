import React from 'react'
import PICACHUP from '../img/PICACHUP.png'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const history = useNavigate();

  const navigateTo = (path) => {
      history(path);
  }

    return (
        <div>
            <div className='ErrorComponent container'>
                <img className='imagenError' alt='ErrorImg' src={PICACHUP} />
                <div>
                    <h1>
                        Error 404
                    </h1>
                    <h2> La página que intentas acceder no existe o se ha movido </h2>
                    <button className='btnInicio' onClick={() => navigateTo('/')} >Regresar a inicio</button>
                <button className='btnInformar' onClick={() => navigateTo('/about')} >Informar Error</button>
                </div>
            </div>

        </div>
    )
}

