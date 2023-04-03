import { Pokemon } from "../pokemon/pokemon"
import styled from "styled-components"
import { getPokemonsInfos} from "../../assets/services/getPokemonsInfos"
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

    // useEffect (
    //     () => {
    //        async function fetchPokemons() {
    //             await getPokemonsInfos().then(data => setPokemonsList(data))
    //        }

    //        fetchPokemons();
    //     }
    //     ,
    //     []
    // )
    //     TENTANDO OUTRAS FORMAS DE RENDERIZAR A IMAGEM

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