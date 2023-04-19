import styled from "styled-components"

const ThemeTogglerContainer = styled.div`
    position: absolute;
    left: 0;
    top: 200px;
    width: 170px;
    height: 180px;
    background-color: rgb(255, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ThemeTogglerTitle = styled.h2`
    color: var(--button-font-color);
`

const ThemeTogglerButtonContainer = styled.div`
    background-color: blue;
    display: flex;
`

const ThemeTogglerButton = styled.div`
    width: 50px;
    height: 80px;
    background-color: yellow;
`

export { ThemeTogglerContainer, ThemeTogglerTitle, ThemeTogglerButtonContainer, ThemeTogglerButton }