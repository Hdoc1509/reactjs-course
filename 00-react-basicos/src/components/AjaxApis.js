import React, { Component } from 'react';

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        data.results.forEach(({ url: pokeUrl }) => {
          fetch(pokeUrl)
            .then((res) => res.json())
            .then((pokeData) => {
              // console.log(pokeData);
              const pokemon = {
                id: pokeData.id,
                name: pokeData.name,
                avatar: pokeData.sprites.front_default,
              };

              const pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((pokemon) => (
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
}
