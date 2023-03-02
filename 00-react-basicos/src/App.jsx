import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Componente from "./components/Component";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import "./App.css";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";

function App() {
  const [count, setCount] = useState(0);
  let nombre = "Hdoc";
  let auth = true;
  const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" />
        <h1>{nombre}</h1>
        <p>
          {auth ? "El usuario está logueado" : "El usuario no está logueado"}
        </p>
        <p>{2 + 1}</p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Editar <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <section>
        <Componente msg="Hola, soy un Componente Funcional Expresado desde una prop" />
        <hr />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Hdoc", correo: "hdocdev@gmail.com" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como Prop" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks titulo="Seguidores" />
        <hr />
        <ScrollHooks />
      </section>
    </>
  );
}

export default App;
