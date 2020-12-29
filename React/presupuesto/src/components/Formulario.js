import React, { useState } from 'react';
import Error from './Error'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'


const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre , guardarNombre] = useState('')
    const [cantidad, guardadCantidad] = useState(0)
    const [ error, guardarError ] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false)

        const gasto = {
            nombre,
            cantidad,
            id: uuidv4()
        } 
        
        guardarGasto(gasto)
        guardarCrearGasto(true)

        guardadCantidad(0)
        guardarNombre('')

    } 

    return(
        <form
            onSubmit={ agregarGasto }
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Los campos son obligatorios"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={ nombre }
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={ cantidad }
                    onChange={ e => guardadCantidad( parseInt(e.target.value)) }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>

    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario