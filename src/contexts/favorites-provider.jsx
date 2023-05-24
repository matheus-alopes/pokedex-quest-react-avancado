import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
  const [favoritePokemonsIds, setFavoritePokemonsIds] = useState(localStorage.favoritesList ? JSON.parse(localStorage.favoritesList) : []);

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
    <FavoritesContext.Provider value={{ favoritePokemonsIds, toggleFavorite }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
