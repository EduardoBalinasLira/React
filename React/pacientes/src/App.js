import React, { Fragment, useState, useEffect} from 'react'
import Formulario from './components/formulario'
import Cita from './components/cita'

function App() {

  //Citas en localStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }

  //Arreglo de citas
const [citas , guardarCita] = useState([])

 //use Effect para realizar ciertas operaciones cuando el state cambia

 useEffect( () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas))
  }else{
    localStorage.setItem('citas', JSON.stringify([]))
  }

 }, [citas] );

const crearCita = cita => {

  guardarCita([
    ...citas,
    cita

  ]);

}

//Funcion que elimina cita por id

const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCita(nuevasCitas)

}

//Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas": "Administra tus citas"

  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
        <Formulario 
          crearCita={crearCita}
        />

        </div>

        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={ eliminarCita }
            />
          ))} 
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
