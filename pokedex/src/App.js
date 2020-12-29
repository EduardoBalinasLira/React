import React, {Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Pokemon from './components/Pokemon';

import PokemonState from './context/pokemonState'

function App() {

  return (
    
      <Fragment>
        <PokemonState >
          <Header />
          <Formulario  />

          <Pokemon />

        </PokemonState>
      </Fragment>
  );
}

export default App;
