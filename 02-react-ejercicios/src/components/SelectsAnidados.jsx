import { useState } from "react";
import { GEOAPI_URL } from "../api/urls";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [communityId, setCommunityId] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [municipality, setMunicipality] = useState("");

  const TOKEN = import.meta.env.VITE_GEOAPI_KEY
  //const TOKEN = "&sandbox=1";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>GEOAPI.es</h3>
      <SelectList
        title="comunidad"
        url={`${GEOAPI_URL}/comunidades?key=${TOKEN}`}
        handleChange={(e) => {
          setCommunityId(e.target.value);
        }}
      />
      {communityId !== "" && (
        <SelectList
          title="provincia"
          url={`${GEOAPI_URL}/provincias?CCOM=${communityId}&key=${TOKEN}`}
          handleChange={(e) => {
            setProvinceId(e.target.value);
          }}
        />
      )}
      {provinceId !== "" && (
        <SelectList
          title="municipio"
          url={`${GEOAPI_URL}/municipios?CPRO=${provinceId}&key=${TOKEN}`}
          handleChange={(e) => {
            setMunicipality(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          Código de comunidad: {communityId} - Código de provincia: {provinceId}{" "}
          - Municipio: {municipality}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
