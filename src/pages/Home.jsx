import React, { useContext, useEffect } from 'react'
import { PokemonList, FilterBar, Header } from '../componentes'
import { PokemonContext } from '../context/PokemonContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../server/firebase';
import { useNavigate } from 'react-router-dom'
import { Login } from '../Login/Login';

const auth = getAuth(app);

export const Home = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);
  const [usuario, setUsuario] = React.useState(null);
  const [correo, setCorreo] = React.useState(null);

  const history = useNavigate ();
  const navigateTo = (path) => {
      history(path);
  }

  onAuthStateChanged (auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
      setCorreo(usuario.email)
    } else {
      setUsuario(null);
    }
  });
  useEffect(() => {
     usuario ? 
     console.log("Bienvenido")
     :
    <Login />
  }, [])
  
  return (
    <>
    <Header   user ={correo} />
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
