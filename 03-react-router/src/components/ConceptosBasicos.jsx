import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h3>Home</h3>
            <p>Bienvenidos al tema de las Rutas en React</p>
          </Route>
          <Route path="/acerca" exact>
            <h3>Acerca</h3>
          </Route>
          <Route path="/contacto" exact>
            <h3>Contacto</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
