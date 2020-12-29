import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Cart = ({ url }) => {

    const [ pokemon, guardarPokemon ] = useState({})

    useEffect(() => {
        const pokemonAPI = async () =>{
            const resultado = await axios(url)
            console.log(resultado);

        } 
    })

    return ( 
        <h1>Desde tarjeta</h1>
     );
}
 
export default Cart;