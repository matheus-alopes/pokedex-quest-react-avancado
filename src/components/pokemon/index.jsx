import {FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName} from "./styles"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { FavoritesContext } from "../../contexts/favorites-provider"

export const Pokemon = (props) => {
  const { favoritePokemonsIds, toggleFavorite } = useContext(FavoritesContext)

  return (
          <ListItemContainer>
            <FavoritePokemonContainer>
              <FontAwesomeIcon
                icon={faStar}
                style={
                  {color: "var(--button-background-color)"}
                }
                onClick={() => toggleFavorite(props.id)}
              />
            </FavoritePokemonContainer>

            <Link
              to={`/pokemon/${props.id}`}
              onClick={
                () => {
                  localStorage.setItem("pageCounter", props.listPage);

                  console.log(favoritePokemonsIds);
                }
              }
            >
              <LisItemLink>
                <ListItemImage image={props.image} />

                <ListItemName>{props.name}</ListItemName>

                <ListItemDescription>
                  {props.description}
                </ListItemDescription>
              </LisItemLink>
            </Link>
          </ListItemContainer>
    )
}