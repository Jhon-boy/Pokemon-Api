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
//FIREBASE


//Crear cuentas 
import { CreateCount } from './Forms/CreateCount'
import { Login } from './Login/Login'
import { Header } from './componentes'
import { ProtectedRoute } from './Routes/ProtectedRoutes'

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
       console.log("Estamos en useeffect");
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
          </Route>
        </Route>
      </Route>

      <Route path='/register' element={<CreateCount />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  )
}
export default AppRouter;

// {
//   VERSION 2:
//   <Routes>

//   <Route path='/'>
//     {
//       usuario ?
//         <Navigate from='/' to='/home' replace  />
//         :
//         <Navigate from='/' to='/login' />
//     }
//   </Route>
//   {/* ----------LOGIN--------- */}
//   <Route exact path='/login'>
//     {
//       usuario ?
//         <Home correoUsuario={usuario.email} />
//         :
//         <Login />
//     }
//   </Route>

//   {/* ----------HOME------------------- */}
//   <Route exact path='/home'>
//     {
//       usuario ?
//         <Home correoUsuario={usuario.email} />
//         :
//         <Login />
//     }
//   </Route>

//   {/* ------------------------------ */}
//   <Route path='/pokemon/:id' element={<PokemonPage />} />
//   <Route path='/search' element={<SearchPage />} />
//   <Route exact path='/register' element={<CreateCount />} />
//   <Route path='*' element={<ErrorPage />} />
// </Routes>


// }