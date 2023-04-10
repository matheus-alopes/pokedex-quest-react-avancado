import { Pokemon } from "../pokemon"
import {getPokemonsList} from "../../services/getPokemonsList"
import { useEffect, useState } from "react";
import { PokemonList } from "./styles";

export const Pokemons = () => {
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect (
        () => {
           async function fetchPokemons() {
            const pokemonsInfos = await getPokemonsList();

            setPokemonsList(pokemonsInfos);

            await console.log(pokemonsInfos);
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
                    pokemon => <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.url} description={pokemon.description} url={pokemon.url} />
                )
            }
        </ PokemonList>
    )
}