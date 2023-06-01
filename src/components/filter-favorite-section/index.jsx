import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FilterFavoriteContainer, FilterFavoriteIcon, FilterFavoriteTitle } from "./styles"
import { getFavoritePokemonsDetails } from "../../services/getFavoritePokemons";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites-provider";

export const FilterFavoriteSection = () => {
    const { favoritePokemonsIds, filterFavorites, setFilterFavorites, favoritesPokemonsList, setFavoritesPokemonsList } = useContext(FavoritesContext);

    async function handdleFilterFavorite() {
        if (filterFavorites) {
            setFilterFavorites( () => false);
        } else {
            console.log(favoritePokemonsIds);

            const favoritesDetails = await getFavoritePokemonsDetails(favoritePokemonsIds);

            setFavoritesPokemonsList(
                () => favoritesDetails
            );

            setFilterFavorites( () => true);

            console.log(favoritesPokemonsList)
        }
    }

    return (
        <FilterFavoriteContainer>
            <FilterFavoriteTitle>Filter Favorites</FilterFavoriteTitle>

            <FilterFavoriteIcon
                style={
                    {
                        backgroundColor: filterFavorites ? "var(--button-background-color)" : "rgb(255, 243, 128, 0.7)",
                        boxShadow: filterFavorites ? "var(--box-shadow) 0px 5px 15px" : "none"
                    }
                }
            >
                <FontAwesomeIcon
                    icon={faStar}
                    style={
                        {
                            color: filterFavorites ? "rgb(255, 243, 50)" : "white"
                        } 
                    }
                    onClick={handdleFilterFavorite}
                />
            </FilterFavoriteIcon>
        </FilterFavoriteContainer>
    )
}