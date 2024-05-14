import React from 'react'
import './SobreMi.css'
import imagenes from '../imagenes'

export default function SobreMi() {
  return (
    <div id='Sobremi' className='contenido-sobre-mi'>
      <div className='contenido-foto-sobremi-color'>
        <img className='imagen-yerti-color' src={imagenes["img-yerti-color"]} alt="" />
      </div>
      <div className='contenido-texto-sobre-mi'>
        <h2 className='titulo-presentacion'> <span className='presentacion-sobre-mi'>Hola! Soy</span>  Yerti   </h2>
        <p>Una desarrolladora full-stack con una pasión creciente por el desarrollo frontend. Aunque aún estoy en el proceso de aprender y crecer en este emocionante campo, mi dedicación y entusiasmo son inquebrantables.</p> <br />
        <p>Mi enfoque principal radica en crear interfaces de usuario intuitivas y atractivas que mejoren significativamente la experiencia del usuario. Cada uno de mis proyectos refleja mi compromiso con la calidad y la atención al detalle, estoy emocionada por seguir ampliando mi conjunto de habilidades mientras me enfrento a nuevos y emocionantes desafíos.</p> <br />
        <p>Si estás buscando un miembro entusiasta y dedicado para tu equipo de desarrollo frontend, ¡me encantaría ser parte del equipo y contribuir con mi energía y pasión al éxito de tu próximo proyecto!</p>
      </div>
    </div>
  )
}
