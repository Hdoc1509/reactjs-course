import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    name: "Seiya",
    constellation: "Pegaso",
    id: 1,
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    name: "Shun",
    constellation: "Andrómeda",
    id: 4,
  },
  {
    name: "Ikki",
    constellation: "Fénix",
    id: 5,
  },
];

function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map((el) => (el.id === data.id ? data : el));

    setDb(newData);
  };

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      const newData = db.filter((el) => el.id !== id);

      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
}

export default CrudApp;
