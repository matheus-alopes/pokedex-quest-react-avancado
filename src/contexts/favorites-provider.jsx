import { createContext, useState } from "react";

const FavoritesContext = createContext()

const FavoritesProvider = (props, pokemonId) => {  
    const [favoritePokemonsIds, setFavoritePokemonsIds] = useState([]);

    const toggleFavorite = (pokemonId) => {
        if (favoritePokemonsIds.includes(pokemonId)) {
          console.log(`pokemon ${pokemonId} retirado dos favoritos`);
    
          setFavoritePokemonsIds(
            (oldList) => oldList.filter(
              (id) => id !== pokemonId
            )
          )
    
          event.target.style.color = "var(--button-background-color)";
        } else {
          console.log(`pokemon ${pokemonId} adicionado aos favoritos`);
    
          setFavoritePokemonsIds((oldList) => [...oldList, pokemonId]);
    
          event.target.style.color = "yellow";
        }
      };

    return (
        <FavoritesContext.Provider value={{favoritePokemonsIds, toggleFavorite}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProvider }