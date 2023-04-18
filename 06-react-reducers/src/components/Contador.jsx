import { useState, useReducer } from "react";

const initialState = {
  contador: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { contador: state.contador + 1 };
    case "DECREMENT":
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  //const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  //const sumar = () => setContador(contador + 1);
  const sumar = () => dispatch({ type: "INCREMENT" });

  //const restar = () => setContador(contador - 1);
  const restar = () => dispatch({ type: "DECREMENT" });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
