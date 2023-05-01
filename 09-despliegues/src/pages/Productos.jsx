import { useHistory, useLocation } from "react-router-dom";

const Productos = () => {
  //const location = useLocation();
  //console.log(location);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  //console.log(query);

  const LIMIT = 20;
  const start = parseInt(query.get("inicio")) || 1;
  const end = parseInt(query.get("fin")) || LIMIT;
  //console.log({ start, end });

  const history = useHistory();
  //console.log(history);

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productost</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>.
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button> }
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
