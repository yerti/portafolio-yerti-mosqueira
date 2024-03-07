import React from 'react'
import './TextoHabilidades.css'

export default function TextoHabilidades(props) {
    return (
        <div className='contenido-texto-habilidades'>
            <div className='imagen-lenguaje'>
                <img src={props.imagenes[props.textImg]} alt="" />
            </div>
            <p>{props.titulo}</p>
        </div>
    )
}
