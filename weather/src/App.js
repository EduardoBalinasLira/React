import React, { Fragment, useState, useEffect } from 'react';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Error from "./components/Error"


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [ consultar, guardarConsultar ] = useState(false)
  const [ resul, guardarResultado ] = useState({})
  const [ error , guardarError ] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      
      if(consultar === true){
        const appKey = '109d3ad5fd9324c352ed50571753d03c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appKey}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json()
        guardarResultado(resultado);
        guardarConsultar(false)

        if (resultado.cod === "404"){
          guardarError(true);
        }else{
          guardarError(false)

        }
      }

    }
    consultarAPI()
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if(error){
    componente = <Error mensaje="No hay resultados" /> 
  }else {
    componente = <Clima 
                    resul={resul}
                  />
  }

  return (
    <Fragment>
      <Header 
        titulo="Clima app"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
