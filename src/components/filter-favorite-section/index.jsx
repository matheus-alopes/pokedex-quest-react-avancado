import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FilterFavoriteContainer, FilterFavoriteIcon, FilterFavoriteTitle } from "./styles"

export const FilterFavoriteSection = () => {
    function handdleFilterFavorite(event) {
        const iconContainer = document.getElementById("filter-favorite-container");

        if (event.target.style.color == "white") {
            event.target.style.color = "rgb(255, 243, 50)"
            
            iconContainer.style.backgroundColor = "var(--button-background-color)";
            iconContainer.style.boxShadow = "var(--box-shadow) 0px 5px 15px"; 
        } else {
            event.target.style.color = "white"

            iconContainer.style.backgroundColor = "rgb(255, 243, 128, 0.7)";
            iconContainer.style.boxShadow = "none"; 
        }
    }


    return (
        <FilterFavoriteContainer>
            <FilterFavoriteTitle>Filter Favorites</FilterFavoriteTitle>

            <FilterFavoriteIcon id="filter-favorite-container">
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        color: "white",
                    }}
                    onClick={handdleFilterFavorite}
                />
            </FilterFavoriteIcon>
        </FilterFavoriteContainer>
    )
}