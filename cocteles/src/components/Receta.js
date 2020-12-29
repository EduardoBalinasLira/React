import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { ModalContext } from '../context/ModalContext'

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 350,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const { recetaCompleta , guardarRecetaID } = useContext(ModalContext);

    const mostrarIngredientes = recetaCompleta => {
        let informacion = [];

        for(let i = 1; i < 16 ; i++){
            if (recetaCompleta[`strIngredient${i}`] !== null){
                informacion.push(
                <li>  { recetaCompleta[`strIngredient${i}`] }  { recetaCompleta[`strMeasure${i}`] } </li>
                )
            }else{
                break
            }
        }
        return informacion;
    }

    return ( 

        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{ receta.strDrink }</h2>
                <img className="card-img-top " src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`}/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarRecetaID(receta.idDrink);
                            handleOpen();
                        }}
                    >Ver Receta</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarRecetaID(null)
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{ recetaCompleta.strDrink }</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {recetaCompleta.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recetaCompleta.strDrinkThumb}/>

                            <ul>
                                { mostrarIngredientes(recetaCompleta) }
                            </ul>

                        </div>
                    </Modal>
                    

                </div>

            </div>
        </div>
        

     );
}
 
export default Receta;