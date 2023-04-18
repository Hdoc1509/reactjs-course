import { useContext } from "react";
import { CrudContext } from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            message={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db !== null && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
