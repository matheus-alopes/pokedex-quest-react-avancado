import styled from "styled-components"

const ListItemContainer = styled.li`
  width: 500px;
  margin: 15px 0;
  padding: 15px 0 0 15px;
  background-color: var(--pokemon-list-container-color);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow) 0px 5px 15px;
    transition: 0.3s ease-in-out;
  }
`

const FavoritePokemonContainer = styled.div`
  font-size: 28px;
  position: absolute;
  top: 4px;
  right: 10px;
`

const LisItemLink = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "img name"
                      "img description";
`

const ListItemImage = styled.div`
  width: 140px;
  height: 140px;
  grid-area: img;
  border-radius: 50%;
  border: 1.5px solid var(--pokemon-list-image-border-color);
  ${
    props => `background-image: url(${props.image})`
  };
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--pokemon-list-image-container-color);
  margin: 0 auto 15px auto;
`

const ListItemName = styled.p`
  grid-area: name;
  margin-top: 8px;
  padding: 15px 0 0 15px;
  font-weight: bold;
  font-size: 32px;
  color: var(--pokemon-list-name-font-color);
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const ListItemDescription = styled.p`
  grid-area: description;
  margin: 12px 0 0 12px;
  padding: 15px;
  line-height: 22px;
  text-align: justify;
  border: 5px inset var(--pokemon-list-description-border-color);
  border-bottom-right-radius: 30px;
  background-color: var(--pokemon-list-description-container-color);
  color: var(--pokemon-list-description-font-color)
`

export {ListItemContainer, FavoritePokemonContainer, LisItemLink, ListItemDescription, ListItemImage, ListItemName}