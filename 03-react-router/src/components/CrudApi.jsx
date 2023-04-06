import { useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.error) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);

      if (!res.error) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;
    //console.log({ endpoint });

    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.error) {
        const newData = db.map((el) => (el.id === data.id ? data : el));

        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.error) {
          const newData = db.filter((el) => el.id !== id);

          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <HashRouter basename="santos">
        <header>
          <h2>CRUD API con Rutas</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              Santos
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            {loading && <Loader />}
            {error && (
              <Message
                message={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db !== null && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </Route>
          <Route exact path="/agregar">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default CrudApi;
