import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);

  useEffect(() => {
    if(busqueda === "") return;

    const consultarAPI = async () => {
      const imagenesPagina = 30
      const key = '19001231-0163991bdad8eb8cd785ed566'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPagina}&page=${paginaactual}`

      const resultado = await fetch(url);
      const respuesta = await resultado.json()

      guardarImagenes(respuesta.hits);

      const calcularPaginas = Math.ceil(respuesta.totalHits / imagenesPagina);
      guardarTotalPaginas(calcularPaginas)

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })

    }

    consultarAPI()

  }, [busqueda, paginaactual]);

  const paginaAnterior = () => {

    const nuevaPaginaActual = paginaactual - 1;

    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);

  }

  const paginaSiguiente = () => {

    const nuevaPaginaActual = paginaactual + 1;

    if(paginaactual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual); 

  }

  return (
    <div className="container">
        <div className="jumbotron">
          <p className="leat text-center">Buscador de imagenes</p>
          <Formulario 
            guardarBusqueda={guardarBusqueda}
          />
        </div>

        <div className="row justify-content-center">
          <ListadoImagenes 
            imagenes={imagenes}
          />

          { (paginaactual === 1) ? null :
            <button
            type='button'
            className="bbtn btn-info mr-1 mb-4"
            onClick={ paginaAnterior }
          >&laquo; Anterior</button>
          }

          { (paginaactual === totalpaginas) ? null : 
            <button
            type='button'
            className="bbtn btn-info mb-4"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
          }

        </div>
   </div>
  );
}

export default App;
