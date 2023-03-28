import { Pokemon } from "../pokemon/pokemon"
import styled from "styled-components"
import { getPokemonsInfos } from "../../assets/services/getPokemonsInfos"

let pokemonList = await getPokemonsInfos();

const PokemonList = styled.ul`
    margin: 40px 30px 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Pokemons = () => {
    console.log(pokemonList)

    return (
        // <PokemonList>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        //     <Pokemon/>
        // </ PokemonList>

        <PokemonList>
            {
                pokemonList.forEach(
                    pokemon => {
                        return (
                            <h1>porra</h1>
                        )
                    }
                )
            }
        </ PokemonList>
    )
}