import React, { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoRecetas from './components/ListaRecetas'

import CategoriasProvider from './context/categoriaContext';
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'
function App() {
  return (
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
              <Header />  
              <div className="container mt-5">
                <div className="row">
                    <Formulario />
                </div>
                <ListadoRecetas />  
              </div>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
  );
}

export default App;
