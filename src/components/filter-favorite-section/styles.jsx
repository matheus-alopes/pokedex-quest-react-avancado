import styled from "styled-components";

const FilterFavoriteContainer = styled.div`
    width: 160px;
    height: 140px;
    border-radius: 8px 0 0 8px;
    background-color: var(--button-background-color);
    box-shadow: rgba(0, 0, 0, 0.24) -4px 4px 8px;
    color: var(--button-font-color);
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
`

const FilterFavoriteTitle = styled.h2`
    font-weight: 500;
    text-align: center;
`

const FilterFavoriteIcon = styled.div`
    padding: 4px 8px;
    font-size: 36px;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgb(255, 243, 128, 0.7);
    &:hover {
        box-shadow: var(--box-shadow) 0px 5px 15px;
        transition: 0.3s ease-in-out;
      }
`

export { FilterFavoriteContainer, FilterFavoriteTitle, FilterFavoriteIcon }