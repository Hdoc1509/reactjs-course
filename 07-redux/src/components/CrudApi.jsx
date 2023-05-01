import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSaintData,
  deleteSaintData,
  noData,
  readAllData,
  updateSaintData,
} from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

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
        // console.dir(res);
        if (!res.error) {
          //setDb(res);
          if (res instanceof DOMException) {
            dispatch(noData());
            console.error(res);
          } else {
            dispatch(readAllData(res));
          }

          setError(null);
        } else {
          //setDb(null);
          dispatch(noData());
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

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
        //setDb([...db, res]);
        dispatch(createSaintData(res));
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
        //const newData = db.map((el) => (el.id === data.id ? data : el));

        //setDb(newData);
        dispatch(updateSaintData(data));
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
          //const newData = db.filter((el) => el.id !== id);

          //setDb(newData);
          dispatch(deleteSaintData(id));
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
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
      </article>
    </>
  );
};

export default CrudApi;
