import { Redirect, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <MenuConceptos />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/acerca" component={Acerca} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/usuario/:username" component={Usuario} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/about">
          <Redirect to="/acerca" />
        </Route>
        <Route exact path="/contact">
          <Redirect to="contacto" />
        </Route>
        <Route path="/react" component={ReactTopics} />
        <Route exact path="/login" component={Login} />
        {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
};

/*const ConceptosBasicos = () => {
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
            <Acerca />
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </Route>
          <Route path="/contacto" exact component={Contacto} />
          <Route
            path="/contacto"
            exact
            children={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt ex occaecat reprehenderit commodo officia
                  dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                  proident adipisicing id nulla nisi laboris ex in Lorem sunt
                  duis officia eiusmod. Aliqua reprehenderit commodo ex non
                  excepteur duis sunt velit enim. Voluptate laboris sint
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis.
                </p>
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
};*/

export default ConceptosBasicos;
