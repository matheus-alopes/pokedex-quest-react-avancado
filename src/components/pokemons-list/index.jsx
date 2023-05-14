import { Pokemon } from "../pokemon"
import {getPokemonsList} from "../../services/getPokemonsList"
import { useEffect, useState } from "react";
import { PokemonList } from "./styles";
import { NextButtonSection } from "../next-button-section";
import { BackButtonSection } from "../back-button-section"
import { ThemeTogglerButton } from "../theme-toggler-button";
import { PageCounterSection } from "../page-counter-section";

export const Pokemons = () => {
    const pageCounter = Number(localStorage.pageCounter); //O localStorage armazena no formato "string"

    const [notebookPageCounter, setNotebookPageCounter] = useState(pageCounter ? pageCounter : 0)
    
    const [pokemonsList, setPokemonsList] = useState([])

    const [inputPageNumber, setInputPageNumber] = useState((pageCounter ? pageCounter : 0) + 1)

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

    useEffect (
        () => {
           setInputPageNumber(notebookPageCounter + 1);
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

    function handleInputPageNumberChange(event) {
        const newPageNumber = parseInt(event.target.value, 10) - 1; // Subtrai 1 para ajustar à indexação base 0

        if (newPageNumber >= 0 && newPageNumber <= 127) { // Verifica se o número da página está dentro do intervalo válido (0-127)
          setNotebookPageCounter(newPageNumber);
        }
    }


    return (    
        <>
            <PageCounterSection
                inputPageValue= { inputPageNumber }
                inputPageNumberChangeFunction={ handleInputPageNumberChange }
            />

            <BackButtonSection
                clickFunction = { () => handleBack() }
                height={"small"}
                disabled={notebookPageCounter === 0}
            />

            <ThemeTogglerButton />

            <PokemonList>
                {   
                    pokemonsList.map (
                        pokemon => 
                            <Pokemon
                                name={pokemon.name}
                                image={pokemon.image}
                                key={pokemon.url}
                                description={pokemon.description}
                                listPage={notebookPageCounter}
                                id={
                                    (pokemonsList.indexOf(pokemon) + 1) + (10 * notebookPageCounter)
                                } //Com esse cálculo do "id", acessamos o endpoint do pokemon correto quando acessamos seus detalhes após gerar outra lista
                            />
                    )
                }
            </ PokemonList>

            <NextButtonSection clickFunction = { ()=> handleNext() } />
        </>
    )
}