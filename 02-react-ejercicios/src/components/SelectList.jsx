import { useFetch } from "../hooks/useFetch";
import { capitalize } from "../utils/capitalize";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  if (data === null) return null;

  if (error !== null) {
    return (
      <Message
        message={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  const id = `select-${title}`;
  const label = capitalize(title);
  const options = data.data;

  //console.log(options)

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">
          Elige {title === "municipio" ? "un" : "una"} {title}
        </option>
        {data !== null &&
          title === "comunidad" &&
          options.map(({ COM: communityName, CCOM: communityId }) => (
            <option value={communityId}>{communityName}</option>
          ))}
        {data !== null &&
          title === "provincia" &&
          options.map(({ PRO: provinceName, CPRO: provinceId }) => (
            <option value={provinceId}>{provinceName}</option>
          ))}
        {data !== null &&
          title === "municipio" &&
          options.map(({ DMUN50: municipalityName }) => (
            <option value={municipalityName}>{municipalityName}</option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
