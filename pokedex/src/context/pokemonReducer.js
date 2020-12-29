import { 
    AGREGAR_POKEMON,
    AGREGAR_ERROR,
    AGREGAR_NOMBRE
} from '../type/index'

export default (state, action) => {
    switch(action.type){

        case AGREGAR_NOMBRE:
            return{
                ...state,
                pokemon: action.payload
            }
        
        case AGREGAR_POKEMON:
            return{
                ...state,
                info_pokemon: action.payload
            }

        case AGREGAR_ERROR:
            return{
                ...state,
                error: action.payload
            }
        
        default: 
            return state;
    }
}