import React, { useEffect } from 'react'
import './Inicio.css'
import imagenes from '../imagenes'

export default function Inicio() {

    useEffect(() => {
        function initparticles() {
            bubbles();

        }

        function bubbles() {
            const elements = document.querySelectorAll('.particletext.bubbles');
            elements.forEach(element => {
                const bubblecount = (element.offsetWidth / 50) * 10;
                for (let i = 0; i <= bubblecount; i++) {
                    const size = getRandomNumber(40, 80) / 10;
                    const bubble = document.createElement('span');
                    bubble.className = 'particle';
                    bubble.style.top = `${getRandomNumber(20, 80)}%`;
                    bubble.style.left = `${getRandomNumber(0, 95)}%`;
                    bubble.style.width = `${size}px`;
                    bubble.style.height = `${size}px`;
                    bubble.style.animationDelay = `${getRandomNumber(0, 30) / 10}s`;
                    element.appendChild(bubble);
                }
            });
        }


        // Rest of the functions like lines(), confetti(), fire(), and sunbeams() follow a similar pattern

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        initparticles();

        // Cleanup function if needed
        return () => {
            const particles = document.querySelectorAll('.particletext .particle');
            particles.forEach(particle => {
                particle.remove();
            });
        };
    }, []);

    return (
        <div id='Inicios' className='contenido-inicio'>
            <div className='texto-inicio'>
                <h2>PORTAFOLIO</h2>
                <h3>Yerti Mosqueira Briceño</h3>
                <p className='texto-desarrolladora'>- Desarrolladora Full-Stack</p>
                <div className='botones-de-contacto'>
                    <button><a href="https://www.linkedin.com/in/yerti/" target="_blank">LinkedIn</a></button>
                    <button><a href="https://github.com/yerti" target="_blank">GitHub</a></button>
                </div>
                <div>
                    <span className='circulo-1'></span>
                </div>

            </div>
            <img className='imagen-yerti-portafolio' src={imagenes["img-yerti"]} alt="imagen de perfil yertis" />

            <div class="textcontainer">
                <span class="particletext bubbles color-bubles">Bubbles</span>
            </div>

        </div>
    )
}
