import React, { Component } from "react";

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

  async componentDidMount() {
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
    this.setState({
      pokemons: fetchedPokemons,
    });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
