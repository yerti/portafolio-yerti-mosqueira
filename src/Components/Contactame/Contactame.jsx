import React from 'react'
import './Contactame.css'
import imagenes from '../imagenes'

export default function Contactame() {
  return (
    <div className='content-contact'>
      <h2 className='title-contact'>Contactame:</h2>
      <div className='contenido-imagenes-form'>
        <form action="https://formsubmit.co/yerti0818@gmail.com" method="POST" className='content-information-contact'>
          <div className='form-content'>
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" name='name' />
          </div>
          <div className='form-content'>
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" name='email' />
          </div>
          <div className='form-content'>
            <label htmlFor="subject">Asunto</label>
            <input type="text" name='subject' />
          </div>
          <div className='form-content'>
            <label htmlFor="comments">Comentarios</label>
            <textarea name="comments" cols={15} rows={5}></textarea>
          </div>

          <input className='boton-enviar' type="submit" value="enviar" />

        </form>
        <div className='content-efect-carrusel'>
          <figure class="tarjetas">
            <div class="tarjetas__contenido">
              <div class="tarjetas__elemento">
                <img src={imagenes["img-uno"]} alt="imagen code" />
              </div>
              <div class="tarjetas__elemento">
                <img src={imagenes["img-dos"]} alt=" imagen code two" />
              </div>
              <div class="tarjetas__elemento">
                <img src={imagenes["img-tres"]} alt="imagen code tres" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
