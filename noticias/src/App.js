import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias'

function App() {


  //Definir categoria

  const [ categoria, guardarCategoria ] = useState();

  const [ noticias , guardarNoticia ] = useState([])

  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=fcb6efcfdc224fbaa74a4dd9893db67b`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()

      guardarNoticia(noticias.articles);
    }

    consultarAPI()

  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias 
            noticias={noticias}
          />
      </div>

    </Fragment>
  );
}

export default App;
