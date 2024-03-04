import './App.css';
import Espacio from './Components/Espacio/Espacio';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Espacio />
      <Inicio />
    </div>
  );
}

export default App;
