import React from 'react'

export default function TarjetasBackend(props) {
    return (
        <div className='contenido-tarjetas'>
            <img className='imagen-contenido-tarjetas' src={props.imagenes[props.textImg]} alt="" />
            <div className='contenido-textos-tarjetas'>
                <h2>{props.title}</h2>
                <p>{props.descriptions}</p>
                <div className='contenido-url-proyectos'>
                    <button><a href={props.codigo} target="_blank">Ver Codigo</a></button>
                </div>

            </div>
        </div>
    )
}
