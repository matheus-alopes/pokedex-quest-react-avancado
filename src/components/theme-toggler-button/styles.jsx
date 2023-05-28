import styled from "styled-components"

const ThemeTogglerContainer = styled.div`
    width: 160px;
    height: 140px;
    background-color: var(--button-background-color);
    border-radius: 0 8px 8px 0;
    color: var(--button-font-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.34) 4px 4px 8px;
`

const ThemeTogglerTitle = styled.h2`
    font-weight: 500;
`

const ThemeTogglerButtonContainer = styled.div`
    width: 120px;
    height: 90px;
    display: flex;
`

const TogglerButton = styled.div`
    padding: 4px;
    width: 45px;
    height: 90px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: var(--background-color);
    opacity: 0.8;
    border: 5px inset var(--button-border-color);
    position: relative;
`

const Toggler = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--button-font-color);
    position: absolute;
    top: var(--toggler-initial-position);
`

const ThemesContainer = styled.div`
    padding: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
`

const LightTheme = styled.p`

`

const DarkTheme = styled.p`

`

export { ThemeTogglerContainer, ThemeTogglerTitle, ThemeTogglerButtonContainer, TogglerButton, Toggler, ThemesContainer, LightTheme, DarkTheme }