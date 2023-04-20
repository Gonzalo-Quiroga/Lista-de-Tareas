import './App.css';
import TareaLogo from './img/tarea.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-logo-contenedor'>
        <img 
          src={TareaLogo} 
          className='tareas-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
