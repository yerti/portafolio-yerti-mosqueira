import React from 'react'
import imagenes from '../imagenes'
import Tarjetas from '../Tarjetas/Tarjetas'
import TarjetasBackend from '../TrajetasBackend/TarjetasBackend'
import './Proyectos.css'

export default function Proyectos() {
    return (
        <div className='contenido-proyecto'>
            <h3 className='titulo-proyectos'>Proyectos:</h3>
            <div className='contenido-tarjetas-proyecto'>
                <Tarjetas
                    imagenes={imagenes}
                    textImg='img-tip-calculator'
                    title='Tip Calculator App'
                    descriptions='Es una Aplicación Web Progresiva (PWA) donde utilicé CSS nativo,
                    HTML5 y JavaScript para su desarrollo. La aplicación consiste en una calculadora
                    de propinas que calcula la propina en función del número de personas y el 
                    porcentaje de propina. Es una aplicación responsiva que se adapta a cualquier 
                    dispositivo.'
                    url='https://yerti.github.io/Tip-calculator-app/'
                    codigo='https://github.com/yerti/Tip-calculator-app'
                ></Tarjetas>
                <Tarjetas
                    imagenes={imagenes}
                    textImg='img-countries'
                    title='Rest Countries Api'
                    descriptions='Es una página web creada utilizando el framework Angular. 
                    Utilicé una API para obtener información sobre los países de cada región y desarrollé filtros de búsqueda por nombre de país y región. Para el estilo, utilicé CSS nativo. La página web es responsiva y se adapta a cualquier dispositivo, además de contar con la funcionalidad para activar el modo oscuro.'
                    url='https://rest-countries-api-gamma-five.vercel.app/inicio'
                    codigo='https://github.com/yerti/rest-countries-api'
                ></Tarjetas>

                <TarjetasBackend
                    imagenes={imagenes}
                    textImg='img-gestor-facturas'
                    title='Gestor de Facturas'
                    descriptions='Como desarrolladora frontend, estuve a cargo de crear una aplicación para la empresa SURGICORP, utilizando Python y CSS3 en el framework React y Django, con una base de datos SQLite. Mi responsabilidad principal fue mejorar la facilidad de visualización y modificación de facturas. Trabajé en estrecha colaboración con el equipo de desarrollo backend para integrar las solicitudes a las APIs que crearon, utilizando el método fetch para realizar operaciones como mostrar, modificar y eliminar facturas en el frontend.'
                    codigo='https://github.com/josh-94/appfacturacionesSC_H'
                ></TarjetasBackend>
                <TarjetasBackend
                    imagenes={imagenes}
                    textImg='img-backend'
                    title='Clon de AirBnB La consola y la Web Estática '
                    descriptions='Desarrollé una aplicación utilizando Python, HTML y CSS3. Incluye una interfaz de línea de comandos personalizada en Python para administrar datos y clases de almacenamiento. Esta interfaz permite gestionar datos, crear registros y modificar información de manera eficiente. Además, me encargué de la maquetación del sitio web, asegurando una presentación atractiva y coherente para los usuarios finales.'
                    codigo='https://github.com/Denzel18rb/holbertonschool-AirBnB_clone'
                ></TarjetasBackend>

                <TarjetasBackend
                    imagenes={imagenes}
                    textImg='img-base-de-datos'
                    title='Clon de AirBnB Base de Datos y Despliegue de la Web Estática'
                    descriptions='Utilicé MySQL para construir la base de datos de un proyecto. La base de datos originalmente se encontraba en un archivo único y no tenía un almacén de datos separado. Me encargué de la configuración del servidor y desplegué la página estática asociada al proyecto. Esta labor incluyó la migración de la base de datos a MySQL, la configuración adecuada del servidor para su funcionamiento y la implementación del despliegue de la página estática para su acceso público.'
                    codigo='https://github.com/yerti/holbertonschool-AirBnB_clone_v2'
                ></TarjetasBackend>

                <TarjetasBackend
                    imagenes={imagenes}
                    textImg='img-backend'
                    title='Clon de AirBnB Web Framework RESTful API Web Dinámica'
                    descriptions='Desarrollé un proyecto utilizando Python con Flask para el backend y JavaScript/jQuery para el frontend. En el servidor, creé rutas con Flask para renderizar páginas y una API para manejar solicitudes. En el cliente, implementé la lógica y la interacción del usuario para el frontend y el backend, asegurando una experiencia fluida y receptiva en toda la aplicación.'
                    codigo='https://github.com/jsuarez19/holbertonschool-AirBnB_clone_v3'
                ></TarjetasBackend>
            </div>
        </div>
    )
}
