import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")
  

useEffect(() => {
  fetch(API)
  .then((res) => res.json())
  .then(data => setPokemons(data))
}, [])

function onSearchChange(event) {
  setSearch(event.target.value)
}

function addNewPokemon(newPokemon) {
  setPokemons([...pokemons, newPokemon])
}

const searchedPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search onSearchChange={onSearchChange} search={search}/>
      <br />
      <PokemonCollection pokemons={searchedPokemons} />
    </Container>
  );
}

export default PokemonPage;
