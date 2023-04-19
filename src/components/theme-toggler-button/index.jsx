import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle } from "./styles"

export const ThemeTogglerButton = () => {
    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <ThemeTogglerButton />

            </ThemeTogglerButtonContainer>
        </ThemeTogglerContainer>
    )
}