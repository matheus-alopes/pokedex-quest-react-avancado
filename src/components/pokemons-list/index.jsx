import { Pokemon } from "../pokemon"
import {getPokemonsList} from "../../services/getPokemonsList"
import { useEffect, useState } from "react";
import { PokemonList } from "./styles";
import { NextButtonSection } from "../next-button-section";
import { BackButtonSection } from "../back-button-section"

export const Pokemons = () => {
    const [notebookPageCounter, setNotebookPageCounter] = useState(0)
    
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect (
        () => {
           async function fetchPokemons() {
            const pokemonsInfos = await getPokemonsList(notebookPageCounter);

            setPokemonsList(pokemonsInfos);

            await console.log(pokemonsInfos);
           }

           fetchPokemons();
        }
        ,
        [notebookPageCounter]
    )

    function handleBack() {
        setNotebookPageCounter (
            (count) => count - 1
        )
    }

    function handleNext() {
        setNotebookPageCounter (
            (count) => count + 1
        )
    }


    return (    
        <>
            <BackButtonSection clickFunction = { ()=> handleBack() } height={"small"} disabled={notebookPageCounter === 0} />

            <PokemonList>
                {   
                    pokemonsList.map (
                        pokemon => <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.url} description={pokemon.description} id={(pokemonsList.indexOf(pokemon) + 1)+10*notebookPageCounter} />
                    ) //Com esse cálculo do "id", acessamos o endpoint do pokemon correto quando acessamos seus detalhes após gerar outra lista
                }
            </ PokemonList>

            <NextButtonSection clickFunction = { ()=> handleNext() } />
        </>
    )
}