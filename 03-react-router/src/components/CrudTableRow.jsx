import { useHistory } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { name, constellation, id } = el;
  const history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
