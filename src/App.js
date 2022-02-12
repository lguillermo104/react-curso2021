import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado"
import RenderizadoCondicional from "./components/RenderizadoCondicional"
import RenderizadoElemento  from "./components/RenderizadoElemento"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          <Componente msg="Bienvenido a los componentes"></Componente>
          <hr />
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero= {19}
            booleano={false}
            arreglo = {[1, 2, 3]} 
            objeto = {{nombre: "Vicente", correo: "lguillermo@hotmail.com"}}
            funcion = { (num) => num * num }
            elementoReact = {<i>Esto es un elemento React</i>}
            componenteReact = {<Componente msg="Soy un componente pasado como props" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElemento />
        </section>

      </header>
    
    </div>
  );
}

export default App;
