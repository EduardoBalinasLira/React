import React, { Fragment, useState, useContext } from 'react';
import pokemonContext from '../context/pokemonContext';
import Error from './Error'

import styled from '@emotion/styled';

const Contenedor = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:4rem;
    width:100%;
    
`;

const Input = styled.input`
    width:250px;
    height:35px;
    margin:10px;
    border-radius:6px ;

    @media(max-width: 640px){
        position:relative;
        left: 15%;
    }
`;

const Boton = styled.button`
    @media(max-width: 640px){
        position: relative;
        left:32%;
        margin-top:10px;
    }
`;


const Formulario = () => {

    const [ dato , guardarDato ] = useState('');
    const [ error , guardarError ] = useState(false);

    const  datoContext = useContext(pokemonContext);

    const { modificarPokemon } = datoContext;

    const leerPokemon = e => {
        guardarDato(e.target.value)
    }

    const enviarDatos = e => {
        e.preventDefault()

        if(dato.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false)

        modificarPokemon(dato)

        guardarDato('')
        
    }
    

    return ( 
        <Contenedor>
            <form
                onSubmit={enviarDatos }
            >
                <Input 
                    type='text'
                    name='pokemon'
                    placeholder='Ingrese pokemon'
                    value={ dato }
                    onChange={leerPokemon}
                    
                />

                <Boton
                    className="btn btn-danger"
                >
                    Buscar Pokemon
                </Boton>
                { error ? <Error mensaje="No puede estar en blanco" />: null }

            </form>
        </Contenedor>
     );
}

export default Formulario;