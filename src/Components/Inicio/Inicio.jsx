import React from 'react'
import './Inicio.css'
import imagenes from '../imagenes'

export default function Inicio() {
    return (
        <div id='Inicios' className='contenido-inicio'>
            <div className='texto-inicio'>
                <h2>PORTAFOLIO</h2>
                <h3>Yerti Mosqueira Briceño</h3>
                <p className='texto-desarrolladora'>- Desarrolladora Full-Stack</p>
                <div className='botones-de-contacto'>
                    <button><a href="https://www.linkedin.com/in/yerti/" target="_blank">LinkedIn</a></button>
                    <button><a href="https://wa.link/fht3vb" target="_blank">WhatsApp</a></button>
                    <button><a href="https://github.com/yerti" target="_blank">GitHub</a></button>
                </div>
                <img className='aspiral-verde-header' src={imagenes["img-verdes"]} alt="" />
            </div>
            <img className='imagen-yerti-portafolio' src={imagenes["img-yerti"]} alt="imagen de perfil yertis" />
        </div>
    )
}
