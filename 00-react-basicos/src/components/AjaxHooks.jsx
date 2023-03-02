import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const fetchedPokemons = [];

      const res = await fetch(url);
      const { results } = await res.json();

      const responses = await Promise.all(results.map((el) => fetch(el.url)));
      const pokemons = await Promise.all(responses.map((res) => res.json()));

      pokemons.forEach(({ id, name, sprites }) => {
        const pokemon = { id, name, avatar: sprites.front_default };

        fetchedPokemons.push(pokemon);
      });

      //console.log(fetchedPokemons);
      setPokemons(fetchedPokemons);
    };

    getPokemons();
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
