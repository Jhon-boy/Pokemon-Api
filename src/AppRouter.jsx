//Rutas 
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

//Firebase
import app from './server/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

////Componentes 
import { PokemonPage } from './pages/PokemonPage'
import { SearchPage } from './pages/SearchPage'
import { Home } from './pages/Home'
import { ErrorPage } from './Error/ErrorPage'
import { InfoPage } from './pages/InfoPage'

//Crear cuentas 
import { CreateCount } from './Forms/CreateCount'
import { Login } from './Login/Login'
import { Header } from './componentes'
import { ProtectedRoute } from './Routes/ProtectedRoutes'
import { Perfil } from './pages/Perfil';
import { ContactForm } from './Forms/ContactForm';

// Importando DB



const auth = getAuth(app);

function AppRouter() {
  const [usuario, setUsuario] = React.useState(null);

  // const logeo = () =>{
      onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  // }
  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      }  else{
        setUsuario(null);
      }
    
    }
    );
  });

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route >
        <Route element={<ProtectedRoute usuario={usuario} />}>
          <Route   path='/' element={<Header usuario={usuario} />} >
            <Route index  element={<Home />} />
            <Route path='pokemon/:id' element={<PokemonPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='infoPage' element={ <InfoPage />} />
            <Route path='contactos' element={ <ContactForm />} />
            <Route path='perfil' element={ <Perfil usuario={usuario}/>} />
          </Route>
        </Route>
      </Route>

      <Route path='/register' element={<CreateCount />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  )
}
export default AppRouter;