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

    // useEffect(
    //     () => {
    //         async function fetchFavoritePokemons() {
    //             setPokemonsList(favoritesPokemonsList);
    
    //             await console.log(favoritesPokemonsList);
    //            }

    //        if(localStorage.filterFavorites == "true") {
    //             fetchFavoritePokemons();
    //        }
    //     }
    //     ,
    //     [filterFavorites]
    // )

    useEffect (
        () => {
            async function fetchFavoritePokemons() {
                setPokemonsList(favoritesPokemonsList);
    
                await console.log(favoritesPokemonsList);
               }

           if(filterFavorites) {
                fetchFavoritePokemons();
                console.log(localStorage);

                // localStorage.setItem("filterFavorites", true);
           } else {
            async function fetchPokemons() {
                const pokemonsInfos = await getPokemonsList(notebookPageCounter);
    
                setPokemonsList(pokemonsInfos);
    
                await console.log(pokemonsInfos);

                // localStorage.setItem("filterFavorites", false);
               }
    
               fetchPokemons();
           }
        }
        ,
        [filterFavorites]
    )

    return (    
        <PokemonList>
            {   
                pokemonsList.map (
                    (pokemon) =>        
                        {
                            var pokemonId = (pokemonsList.indexOf(pokemon) + 1) + (10 * notebookPageCounter) //Com esse cálculo do "id", acessamos o endpoint do pokemon correto quando acessamos seus detalhes após gerar outra lista

                            if(pokemonId > 1010) {
                                pokemonId = 10000 + (pokemonId % 1000) - 10 //Com esse cálculo, consigo acessar corretamente o endpoint dos pokemons que alteram seu id a partir da página 101
                            }

                            return (
                                <Pokemon
                                    name={pokemon.name}
                                    image={pokemon.image}
                                    type={pokemon.type}
                                    key={pokemon.name}
                                    description={pokemon.description}
                                    listPage={notebookPageCounter}
                                    id={filterFavorites ? pokemon.id : pokemonId}
                                />
                            )
                        }
                )
            }        
        </ PokemonList>
    )
}