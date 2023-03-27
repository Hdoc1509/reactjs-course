import { useForm } from "../hooks/useForm";
import Loader from "../components/Loader";
import Message from "../components/Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^[a-z0-9]{6,}@{1}[a-z0-9]{3,}\.[a-z]{2,}$/;
  const regexComments = /^.{1,255}$/;

  if (form.name.trim() === "") {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (form.email.trim() === "") {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (form.subject.trim() === "") {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (form.comments.trim() === "") {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

const styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {Reflect.has(errors, "name") && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {Reflect.has(errors, "email") && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {Reflect.has(errors, "subject") && (
          <p style={styles}>{errors.subject}</p>
        )}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {Reflect.has(errors, "comments") && (
          <p style={styles}>{errors.comments}</p>
        )}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message message="Los datos han sido enviados" bgColor="#197854" />
      )}
    </div>
  );
};

export default ContactForm;
