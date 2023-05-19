import {FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName} from "./styles"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Pokemon = (props) => {
  const favoritePokemons = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

  const isPokemonFavorite = favoritePokemons.includes(props.id);

  const handleToggleFavorite = (event) => {
    event.target.style.color == "yellow" ? event.target.style.color = "var(--button-background-color)" : event.target.style.color = "yellow";

    if (isPokemonFavorite) {
      const updatedFavorites = favoritePokemons.filter((pokemonId) => pokemonId !== props.id);

      localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoritePokemons, props.id];

      localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
    }

    console.log(localStorage)
  }

  return (
          <ListItemContainer>
            <FavoritePokemonContainer>
              <FontAwesomeIcon
                icon={faStar}
                style={
                  {color: isPokemonFavorite ? "yellow" : "var(--button-background-color)"}
                }
                onClick={handleToggleFavorite}
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