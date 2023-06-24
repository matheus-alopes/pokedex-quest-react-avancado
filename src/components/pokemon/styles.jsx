import styled, {css} from "styled-components"
import interrogation from "../../assets/images/interrogation.png"

const ListItemContainer = styled.li`
  width: 500px;
  max-height: 333px;
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
  grid-template-areas: "img-type name"
                      "img-type description";
`

const PokemonImageTypeContainer = styled.div`
  grid-area: img-type;
  margin: 0 auto 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListItemImage = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1.5px solid var(--pokemon-list-image-border-color);
  ${
    props => `background-image: url(${props.image})`
  };
  background-repeat: no-repeat;
  background-size: contain;
  ${
    props => props.image == interrogation && css `background-size: 40%`
  };
  background-color: var(--pokemon-list-image-container-color);
  background-position: center;
`

const PokemonTypeList = styled.ul`
    margin-top: 15px;
    display: flex;
    align-items: center;
`

const PokemonType = styled.li`
    margin: 0 10px;
    padding: 3px 5px;
    border: 1px solid var(--pokemon-list-image-border-color);
    border-radius: 5px;
    background-color: var(--pokemon-list-description-container-color);
    color: var(--pokemon-list-description-font-color);
`

const ListItemName = styled.p`
  grid-area: name;
  margin-top: 8px;
  padding: 15px 3px 0 15px;
  font-weight: bold;
  font-size: 28px;
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
  color: var(--pokemon-list-description-font-color);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    border: 1px solid black;
  };
  &::-webkit-scrollbar-track {
    background: var(--pokemon-ability-container-color);
  };
`

export {ListItemContainer, FavoritePokemonContainer, LisItemLink, ListItemDescription, ListItemImage, PokemonImageTypeContainer, PokemonTypeList, PokemonType, ListItemName}