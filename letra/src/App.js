import React, { Fragment, useState, useEffect } from 'react';
import Cancion from './components/Cancion';
import Formulario from './components/Formulario';
import axios from 'axios'
import Informacion from './components/Informacion';

function App() {

  const [buscarLetra, guardarBuscarLetra] = useState({});

  const [ letra, guardarLetra ] = useState('');

  const [ informacion, guardarInformacion ] = useState({})

  useEffect(() => {
    if(Object.keys(buscarLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = buscarLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      try {
        const [ letra, info ] = await Promise.all([
          axios(url),
          axios(url2)
        ]);

        guardarLetra(letra.data.lyrics)
        console.log(info.artists[0]);
      
      } catch (e) {

        console.log(e);
        
      }

    }
    consultarApiLetra();

  }, [buscarLetra,informacion])

  return (
    <Fragment>
      <Formulario 
        guardarBuscarLetra={guardarBuscarLetra}
      />


      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              informacion={informacion}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
            
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
