import {FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName} from "./styles"
import { Link } from "react-router-dom"

export const Pokemon = (props) => {
  return (
          <ListItemContainer>
            <FavoritePokemonContainer>
              &#11088;
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