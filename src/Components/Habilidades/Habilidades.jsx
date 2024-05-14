import React from 'react'
import TextoHabilidades from '../TextoHabilidades/TextoHabilidades'
import imagenes from '../imagenes'
import './Habilidades.css'

export default function Habilidades() {
    return (
        <div className='contenido-habilidades'>
            <h3 className='titulo-habilidades'>HABILIDADES TÉCNICAS</h3>
            <div className='contenido-total-de-habilidades'>
                <div className='tarjeta-habilidades'>
                    <h3>LENGUAJES DE PROGRAMACIÓN:</h3>
                    <div className='contenido-tarjetas-habilidades'>
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-python'
                            titulo='Python'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-c'
                            titulo='Lenguaje C'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-js'
                            titulo='JavaScript'
                        />
                    </div>
                </div>
                <div className='tarjeta-habilidades'>
                    <h3>TECNOLOGÍAS:</h3>
                    <div className='contenido-tarjetas-habilidades'>
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-shell'
                            titulo='Shell Scripting'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-git'
                            titulo='Git Version Control '
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-data'
                            titulo='Data Structures'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-mysql'
                            titulo='MySQL'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-api'
                            titulo='RESTfull API'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-typescript'
                            titulo='Typescript'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-webpack'
                            titulo='Webpack'
                        />
                    </div>
                </div>
                <div className='tarjeta-habilidades'>
                    <h3>SOFTWARE:</h3>
                    <div className='contenido-tarjetas-habilidades'>
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-figma'
                            titulo='Figma'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-ai'
                            titulo='Adobe Illustrator'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-ps'
                            titulo='Adobe Photoshop'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-corel'
                            titulo='CorelDRAW'
                        />
                    </div>
                </div>
                <div className='tarjeta-habilidades'>
                    <h3>WEB DEVELOPMENT:</h3>
                    <div className='contenido-tarjetas-habilidades'>
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-html'
                            titulo='HTML5'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-css'
                            titulo='CSS'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-react'
                            titulo='React'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-angular'
                            titulo='Angular 16'
                        />
                        <TextoHabilidades
                            imagenes={imagenes}
                            textImg='img-node'
                            titulo='Node.js'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
