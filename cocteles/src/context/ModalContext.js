import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [ idReceta, guardarRecetaID ] = useState(null);

    const [ recetaCompleta, guardarRecetaCompleta ] = useState({})


    useEffect(() => {

            const obtenerCompletoAPI = async() =>{
                if (!idReceta) return;

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

                const resultado = await axios(url)

                guardarRecetaCompleta(resultado.data.drinks[0]);

            }
            obtenerCompletoAPI()
        
    },[idReceta])


    return ( 
        <ModalContext.Provider
            value={{
                guardarRecetaID,
                recetaCompleta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;