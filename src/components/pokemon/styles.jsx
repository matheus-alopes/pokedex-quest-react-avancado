import styled from "styled-components"

const ListItemContainer = styled.li`
  width: 500px;
  margin: 15px 0;
  padding-left: 15px;
  background-color: rgb(255, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(28, 129, 237, 0.544) 0px 5px 15px;
    transition: 0.3s ease-in-out;
  }
`

const LisItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "img name"
                      "img description";
  grid-template-rows: 50px;
`

const ListItemImage = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 15px;
  grid-area: img;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.6);
  ${
    props => `background-image: url(${props.image})`
  };
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(255, 255, 255, 0.7);
`

const ListItemName = styled.p`
  grid-area: name;
  padding: 15px 0 0 15px;
  font-weight: bold;
  font-size: 32px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`

const ListItemDescription = styled.p`
  grid-area: description;
  margin: 12px 0 0 12px;
  padding: 15px;
  line-height: 22px;
  text-align: justify;
  border: 5px inset rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 30px;
  background-color: rgb(255, 255, 255, 0.7);
`

export {LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, ListItemName}