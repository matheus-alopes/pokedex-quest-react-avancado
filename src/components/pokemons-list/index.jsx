import { useEffect, useState, useContext } from "react";
import { PageCounterContext } from "../../contexts/page-counter-provider";
import { FavoritesContext } from "../../contexts/favorites-provider";
import { PokemonList } from "./styles";
import { getPokemonsList } from "../../services/getPokemonsList";
import { Pokemon } from "../pokemon";

export const Pokemons = () => {
    const { notebookPageCounter } = useContext(PageCounterContext)
    const { favoritesPokemonsList, filterFavorites } = useContext(FavoritesContext);

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

    useEffect (
        () => {
           async function fetchPokemons() {
            setPokemonsList(favoritesPokemonsList);

            await console.log(favoritesPokemonsList);
           }

           fetchPokemons();
        }
        ,
        [filterFavorites]
    )

    return (    
        <PokemonList>
            {   
                pokemonsList.map (
                    pokemon => 
                        <Pokemon
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                            key={pokemon.id}
                            description={pokemon.description}
                            listPage={notebookPageCounter}
                            id={
                                (pokemonsList.indexOf(pokemon) + 1) + (10 * notebookPageCounter)
                            } //Com esse cálculo do "id", acessamos o endpoint do pokemon correto quando acessamos seus detalhes após gerar outra lista
                        />
                )
            }        
        </ PokemonList>
    )
}