import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FilterFavoriteContainer, FilterFavoriteIcon, FilterFavoriteTitle } from "./styles"
import { getFavoritePokemonsDetails } from "../../services/getFavoritePokemons";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/favorites-provider";

export const FilterFavoriteSection = () => {
    const { favoritePokemonsIds, filterFavorites, setFilterFavorites, setFavoritesPokemonsList } = useContext(FavoritesContext);

    useEffect(
        ()=> {
            localStorage.setItem("filterFavorites", filterFavorites)
        }
        ,
        [filterFavorites]
    )

    async function handdleFilterFavorite() {
        if(filterFavorites) {
            setFilterFavorites(false);
        } else {
            const favoritesDetails = await getFavoritePokemonsDetails(favoritePokemonsIds);

            setFavoritesPokemonsList(
                () => favoritesDetails
            );

            setFilterFavorites(true);
        }
    }

    return (
        <FilterFavoriteContainer>
            <FilterFavoriteTitle>Filter Favorites</FilterFavoriteTitle>

            <FilterFavoriteIcon
                style={
                    {
                        backgroundColor: filterFavorites ? "var(--background-color)" : "rgb(255, 243, 128, 0.2)",
                        boxShadow: filterFavorites ? "var(--favorites-box-shadow) 0px 5px 15px" : "none"
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