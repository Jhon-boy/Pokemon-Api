import React from 'react'
import { Routes , Route} from 'react-router-dom'
import { Header} from './componentes/Header'
import { SearchPage} from './pages/SearchPage'
import { Home } from './pages/Home'
import { PokemonPage } from './pages/PokemonPage'
import { ErrorPage } from './Error/ErrorPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='pokemon/:id' element={ <PokemonPage />  } />
            <Route path='search' element={<SearchPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
