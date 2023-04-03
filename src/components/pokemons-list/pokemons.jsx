import { Pokemon } from "../pokemon/pokemon"
import styled from "styled-components"
import { getPokemonsInfos, getPokemonsLinks } from "../../assets/services/getPokemonsInfos"
import { useEffect, useState } from "react";

const PokemonList = styled.ul`
    margin: 40px 30px 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Pokemons = () => {
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect (
        () => {
            getPokemonsInfos().then(data => setPokemonsList(data))
        }
        ,
        []
    )
    
    getPokemonsInfos();
    console.log(pokemonsList)

    return (    
        <PokemonList>
            {
                pokemonsList.map(
                    pokemon => <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.url}/>
                )
            }
        </ PokemonList>
    )
}