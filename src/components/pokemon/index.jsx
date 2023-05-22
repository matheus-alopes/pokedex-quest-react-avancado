import { FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName } from "./styles"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from "react"
import { FavoritesContext } from "../../contexts/favorites-provider"

export const Pokemon = (props) => {
  const { favoritePokemonsIds, toggleFavorite } = useContext(FavoritesContext)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favoritePokemonsIds.includes(props.id))
  }, [favoritePokemonsIds, props.id])

  const handleToggleFavorite = () => {
    toggleFavorite(props.id)
    setIsFavorite(!isFavorite)
  }

  return (
    <ListItemContainer>
      <FavoritePokemonContainer>
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: isFavorite ? "yellow" : "var(--button-background-color)"
          }}
          onClick={handleToggleFavorite}
        />
      </FavoritePokemonContainer>

      <Link
        to={`/pokemon/${props.id}`}
        onClick={() => {
          localStorage.setItem("pageCounter", props.listPage)
          console.log(localStorage)
        }}
      >
        <LisItemLink>
          <ListItemImage image={props.image} />
          <ListItemName>{props.name}</ListItemName>
          <ListItemDescription>{props.description}</ListItemDescription>
        </LisItemLink>
      </Link>
    </ListItemContainer>
  )
}