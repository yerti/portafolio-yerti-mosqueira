import './App.css';
import Espacio from './Components/Espacio/Espacio';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import SobreMi from './Components/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <Header/>
      <Espacio />
      <Inicio />
      <SobreMi />
    </div>
  );
}

export default App;
