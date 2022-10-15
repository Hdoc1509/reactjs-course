import React, { useState, useEffect } from 'react';

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

  // useEffect(() => {
  //   let url = 'https://pokeapi.co/api/v2/pokemon/';
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       data.results.forEach(({ url: pokeUrl }) => {
  //         fetch(pokeUrl)
  //           .then((res) => res.json())
  //           .then((pokeData) => {
  //             // console.log(pokeData);
  //             const pokemon = {
  //               id: pokeData.id,
  //               name: pokeData.name,
  //               avatar: pokeData.sprites.front_default,
  //             };

  //             setPokemons((pokemons) => [...pokemons, pokemon]);
  //           });
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url),
        json = await res.json();
      // console.log(json)

      json.results.forEach(async ({ url: pokeUrl }) => {
        const res = await fetch(pokeUrl),
          pokeData = await res.json();

        // console.log(pokeData);
        const pokemon = {
          id: pokeData.id,
          name: pokeData.name,
          avatar: pokeData.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
          />
        ))
      )}
    </>
  );
}
