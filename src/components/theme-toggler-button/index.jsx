import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle, TogglerButton, ThemesContainer, LightTheme, DarkTheme, Toggler } from "./styles"

export const ThemeTogglerButton = () => {
    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <TogglerButton>
                    <Toggler />
                </TogglerButton>

                <ThemesContainer>
                    <LightTheme>Light</LightTheme>

                    <DarkTheme>Dark</DarkTheme>
                </ThemesContainer>
            </ThemeTogglerButtonContainer>
        </ThemeTogglerContainer>
    )
}