import { useParams } from "react-router-dom";

const Usuario = () => {
  //const params = useParams()
  //console.log(params)

  const { username } = useParams();

  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre del usuario <b>{username}</b>
      </p>
    </div>
  );
};

export default Usuario;
