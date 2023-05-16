import {FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName} from "./styles"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Pokemon = (props) => {
  return (
          <ListItemContainer>
            <FavoritePokemonContainer>
              <FontAwesomeIcon
                icon={faStar}
                style={
                  {color: "var(--button-background-color)"}
                }
                onClick={
                  event => {
                    console.log(event.target.style.color);

                    event.target.style.color = "yellow"
                  } 
                }
              />
            </FavoritePokemonContainer>

            <Link
              to={`/pokemon/${props.id}`}
              onClick={
                () => {
                  localStorage.setItem("pageCounter", props.listPage);
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