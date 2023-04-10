import {LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName} from "./styles"
import { Link, useParams } from "react-router-dom"


export const Pokemon = (props) => {
  return (
          <ListItemContainer>
            <Link to={`/pokemon/${props.id}`}>
              <LisItemLink>
                <ListItemImage  image={props.image} />

                <ListItemName>{props.name}</ListItemName>

                <ListItemDescription>
                  {props.description}
                </ListItemDescription>
              </LisItemLink>
            </Link>
          </ListItemContainer>
    )
}