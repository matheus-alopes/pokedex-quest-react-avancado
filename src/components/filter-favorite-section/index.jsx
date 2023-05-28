import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FilterFavoriteContainer, FilterFavoriteIcon, FilterFavoriteTitle } from "./styles"

export const FilterFavoriteSection = () => {

    return (
        <FilterFavoriteContainer>
            <FilterFavoriteTitle>Filter Favorites</FilterFavoriteTitle>

            <FilterFavoriteIcon>
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        color: "white",
                    }}
                />
            </FilterFavoriteIcon>
        </FilterFavoriteContainer>
    )
}