import styled from "styled-components"

const ThemeTogglerContainer = styled.div`
    position: absolute;
    left: 0;
    top: 200px;
    width: 170px;
    height: 150px;
    background-color: var(--button-background-color);
    color: var(--button-font-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const ThemeTogglerTitle = styled.h2`
    font-weight: bold;
`

const ThemeTogglerButtonContainer = styled.div`
    width: 120px;
    height: 90px;
    display: flex;
`

const TogglerButton = styled.div`
    padding: 8px 0;
    width: 45px;
    height: 90px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: var(--background-color);
    opacity: 0.8;
    box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Toggler = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--button-font-color);
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