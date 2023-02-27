import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
      <div></div>
    </>
  );
}

export default App;
