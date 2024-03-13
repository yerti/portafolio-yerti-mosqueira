import React from 'react'
import './SobreMi.css'
import imagenes from '../imagenes'

export default function SobreMi() {
  return (
    <div id='Sobremi' className='contenido-sobre-mi'>
      <div className='contenido-foto-sobremi-color'>
        <img className='imagen-yerti-color' src={imagenes["img-yerti-color"]} alt="" />
        <div className='texto-contactanos'>
          <h2 className='titulo-contactame'>Contactame:</h2>
          <div className='text-img-information-sobre-mi'>
            <img className='icono-textos' src={imagenes["img-mail"]} alt="" />
            <p>yerti0818@gmail.com</p>
          </div>
          <div className='text-img-information-sobre-mi'>
            <img className='icono-textos' src={imagenes["img-telefono"]} alt="" />
            <p>+51 922 146 831</p>
          </div>
        </div>
      </div>
      <div className='contenido-texto-sobre-mi'>
        <img className='imagen-aspiral-morado-sobre-mi' src={imagenes["img-morados"]} alt="imagen de aspirales morados" />
        <h2 className='titulo-presentacion'>Hola! <br /> Soy Yerti </h2>
        <p>Una desarrolladora full-stack con una pasión creciente por el desarrollo frontend. Aunque aún estoy en el proceso de aprender y crecer en este emocionante campo, mi dedicación y entusiasmo son inquebrantables.</p> <br />
        <p>Mi enfoque principal radica en crear interfaces de usuario intuitivas y atractivas que mejoren significativamente la experiencia del usuario. Cada uno de mis proyectos refleja mi compromiso con la calidad y la atención al detalle, y estoy emocionada por seguir ampliando mi conjunto de habilidades mientras me enfrento a nuevos y emocionantes desafíos.</p> <br />
        <p>Si estás buscando un miembro entusiasta y dedicado para tu equipo de desarrollo frontend, ¡me encantaría ser parte de él y contribuir con mi energía y pasión al éxito de tu próximo proyecto!</p>
      </div>
    </div>
  )
}
