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
            async function fetchFavoritePokemons() {
                setPokemonsList(favoritesPokemonsList);
    
                await console.log(favoritesPokemonsList);
               }

           if(filterFavorites) {
                fetchFavoritePokemons(); 
           } else {
            async function fetchPokemons() {
                const pokemonsInfos = await getPokemonsList(notebookPageCounter);
    
                setPokemonsList(pokemonsInfos);
    
                await console.log(pokemonsInfos);
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
                    pokemon =>        
                        <Pokemon
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                            key={pokemon.name}
                            description={pokemon.description}
                            listPage={notebookPageCounter}
                            id={
                                filterFavorites ? pokemon.id : (pokemonsList.indexOf(pokemon) + 1) + (10 * notebookPageCounter)
                            } //Com esse cálculo do "id", acessamos o endpoint do pokemon correto quando acessamos seus detalhes após gerar outra lista
                        />
                )
            }        
        </ PokemonList>

        // pokemonsList.map(
        //     (pokemon) => {
        //         const favoritePokemon = favoritesPokemonsList.find(
        //           (favorite) => favorite.id === pokemon.id
        //         );
        //         const isFavorite = favoritePokemon ? favoritePokemon.isFavorite : false;
              
        //         return (
        //           <Pokemon
        //             name={pokemon.name}
        //             image={pokemon.image}
        //             type={pokemon.type}
        //             key={pokemon.name}
        //             description={pokemon.description}
        //             listPage={notebookPageCounter}
        //             id={
        //               filterFavorites
        //                 ? pokemon.id
        //                 : pokemonsList.indexOf(pokemon) + 1 + 10 * notebookPageCounter
        //             }
        //             isFavorite={isFavorite}
        //           />
        //         );
        //     }
        // );
    )
}