import React, { useState } from 'react'
import imagenes from '../imagenes'
import './Header.css'

export default function Header() {
    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
        console.log('mostrar lista')
    };
    
    return (
        <div className='contenido-header'>
            <img className='imagen-logo-header' src={imagenes["img-logo"]} alt="imagen-logo-yerti" />
            <div>
                <img className='menu-amburguesa-header' onClick={toggleLista} src={imagenes["img-menu"]} alt="imagen menu" />
                <div className='contenido-lista-header' style={{display: mostrarLista ? "block" : ""}}>
                    <ul>
                        <li><a href="#Inicios">Inicio</a></li>
                        <li><a href="#Sobremi">Sobre Mi</a></li>
                        <li><a href="#Habilidades">Habilidades</a></li>
                        <li><a href="#Proyectos">Proyectos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
