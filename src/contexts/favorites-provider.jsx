import { createContext, useEffect, useState } from "react";
import { getFavoritePokemonsDetails } from "../services/getFavoritePokemons"


const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
  const [favoritePokemonsIds, setFavoritePokemonsIds] = useState(localStorage.favoritesList ? JSON.parse(localStorage.favoritesList) : []);

  const [favoritesPokemonsList, setFavoritesPokemonsList] = useState(localStorage.favoritesListDetails ? JSON.parse(localStorage.favoritesListDetails) : []);

  const [filterFavorites, setFilterFavorites] = useState(localStorage.filterFavorites == "true" ? true : false)

  useEffect(
    ()=> {
      async function fetchFavoritesDetails() {
        const favoritesDetails =  await getFavoritePokemonsDetails(favoritePokemonsIds)

        setFavoritesPokemonsList(
          () => favoritesDetails
        )

        localStorage.setItem("favoritesListDetails", JSON.stringify(favoritesPokemonsList));
      }

      fetchFavoritesDetails()    
    }
    ,
    [favoritesPokemonsList]
  )

  const toggleFavorite = (pokemonId) => {
    if (favoritePokemonsIds.includes(pokemonId)) {
      console.log(`pokemon ${pokemonId} retirado dos favoritos`);

      setFavoritePokemonsIds((oldList) =>
        oldList.filter((id) => id !== pokemonId)
      );

      const updatedFavorites = favoritePokemonsIds.filter(
        (id) => id !== pokemonId
      );

      localStorage.setItem("favoritesList", JSON.stringify(updatedFavorites));
    } 
    
    else {
      console.log(`pokemon ${pokemonId} adicionado aos favoritos`);

      setFavoritePokemonsIds((oldList) => [...oldList, pokemonId]);

      const updatedFavorites = [...favoritePokemonsIds, pokemonId];

      localStorage.setItem("favoritesList", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <FavoritesContext.Provider
      value={
        { favoritePokemonsIds, toggleFavorite, favoritesPokemonsList, setFavoritesPokemonsList, filterFavorites, setFilterFavorites }
      }
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };