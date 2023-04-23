
import './App.css';
import  AppRouter  from './AppRouter';
import React from 'react';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <React.StrictMode>
       <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
    </React.StrictMode>
   
  );
}

export default App;
