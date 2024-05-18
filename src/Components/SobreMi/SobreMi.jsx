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
        <p>Soy una desarrolladora full-stack con una amplia experiencia en diversos aspectos de la programación. Mi enfoque principal se centra en la creación de soluciones de software sólidas y eficientes que satisfagan las necesidades tanto del usuario como del negocio.</p> <br />
        <p>Me apasiona trabajar en todos los niveles del desarrollo, desde la arquitectura del sistema hasta la implementación de interfaces de usuario intuitivas. Cada proyecto en el que me involucro refleja mi compromiso con la calidad y la excelencia técnica.</p> <br />
        <p>Además de mis habilidades en el desarrollo frontend, backend y la gestión de bases de datos, tengo una sólida comprensión de los principios de diseño y la usabilidad, lo que me permite crear experiencias de usuario sobresalientes.</p> <br />
        <p>Si estás buscando un miembro versátil y dedicado para tu equipo de desarrollo, estoy aquí para ofrecerte mi experiencia y mi entusiasmo para contribuir al éxito de tu próximo proyecto. ¡Estoy emocionada por la oportunidad de enfrentar nuevos desafíos y seguir creciendo como profesional en el campo de la programación!</p>
      </div>
    </div>
  )
}
