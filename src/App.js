import './App.css';
import Contactame from './Components/Contactame/Contactame';
import Espacio from './Components/Espacio/Espacio';
import Habilidades from './Components/Habilidades/Habilidades';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Proyectos from './Components/Proyectos/Proyectos';
import SobreMi from './Components/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <Header/>
      <Espacio />
      <Inicio />
      <SobreMi />
      <div id='Habilidades' className='espacio-habilidades'></div>
      <Habilidades />
      <div id='Proyectos' className='espacio-proyectos'></div>
      <Proyectos />
      <div id='Contactame' className='espacio-contactame'></div>
      <Contactame />
    </div>
  );
}

export default App;
