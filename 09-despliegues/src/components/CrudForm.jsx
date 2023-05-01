import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const initialFormData = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ dataToEdit, setDataToEdit, createData, updateData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory()

  useEffect(() => {
    if (dataToEdit !== null) {
      setFormData(dataToEdit);
    } else {
      setFormData(initialFormData);
    }
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.constellation === "") {
      alert("Datos incompletos");
      return;
    }

    if (formData.id === null) {
      createData(formData);
    } else {
      updateData(formData);
    }

    handleReset();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setDataToEdit(null);
    history.push('/')
  };

  return (
    <div>
      <h3>{dataToEdit === null ? "Agregar" : "Editar"} Santo</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          value={formData.constellation}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
