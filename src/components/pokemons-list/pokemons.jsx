import { Pokemon } from "../pokemon/pokemon"
import styled from "styled-components"
import { getPokemonInfos } from "../../assets/services/getPokemonInfos"

const PokemonList = styled.ul`
    margin: 40px 30px 0 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Pokemons = () => {
    getPokemonInfos();

    return (
        <PokemonList>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
            <Pokemon/>
        </ PokemonList>
    )
}