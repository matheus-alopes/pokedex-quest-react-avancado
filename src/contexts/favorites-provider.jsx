import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
  const [favoritePokemonsIds, setFavoritePokemonsIds] = useState(localStorage.favoritesList ? JSON.parse(localStorage.favoritesList) : []);

  const [favoritesPokemonsList, setFavoritesPokemonsList] = useState([]);

  const [filterFavorites, setFilterFavorites] = useState(localStorage.filterFavorites ? true : false);

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

    setFavoritesPokemonsList(
      (oldList) => {
        return oldList.map(
          (pokemon) => {
            if (pokemon.id === pokemonId) {
              return {
                ...pokemon,
                isFavorite: !pokemon.isFavorite,
              };
            }
            return pokemon;
          }
        );
      }
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoritePokemonsIds, toggleFavorite, favoritesPokemonsList, setFavoritesPokemonsList, filterFavorites, setFilterFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };