import styled from "styled-components"

const MenuSectionContainer = styled.div`
grid-area: menu;
height: 99.4%;
margin-top: 10px;
padding-top: 20px;
background-color: rgb(200, 0, 0, 0.15);
display: flex;
flex-direction: column;
gap: 28px;
@media (max-width: 800px) {
    position relative;
    display: none;
}
`

const MenuBurguer = styled.div`
    width: 50px;
    height: 35px;
    display: none;
    // background-color: blue;
    div:nth-child(n+1):nth-child(-n+3) {
        width: 100%;
        height: 5px;
        background-color: var(--button-font-color);
        margin: 6px 0;
        border-radius: 4px;
    }
    @media (max-width: 800px) {
        position absolute;
        top: 165px;
        left: 10px;
        display: block;
        cursor: pointer;
    }
`

export { MenuSectionContainer, MenuBurguer }