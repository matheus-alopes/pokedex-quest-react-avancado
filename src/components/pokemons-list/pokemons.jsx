import { Pokemon } from "../pokemon/pokemon"
import styled from "styled-components"
import {getPokemonsList} from "../../assets/services/getPokemonsInfos"
import { useEffect, useState } from "react";

const PokemonList = styled.ul`
    margin: 60px 30px 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Pokemons = () => {
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect (
        () => {
           async function fetchPokemons() {
            const pokemonsInfos = await getPokemonsList();

            setPokemonsList(pokemonsInfos);
           }

           fetchPokemons();
        }
        ,
        []
    )

    return (    
        <PokemonList>
            {   
                pokemonsList.map (
                    pokemon => <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.url} description={pokemon.description}/>
                )
            }
        </ PokemonList>
    )
}