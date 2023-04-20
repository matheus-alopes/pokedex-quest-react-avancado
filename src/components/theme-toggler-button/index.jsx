import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle, TogglerButton, ThemesContainer, LightTheme, DarkTheme, Toggler } from "./styles"

export const ThemeTogglerButton = () => {
    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <TogglerButton onClick={()=> {
                    if(document.getElementsByTagName("body")[0].classList == "light") {
                        document.getElementsByTagName("body")[0].classList.remove("light");
                        document.getElementsByTagName("body")[0].classList.add("dark");
                    } else {
                        document.getElementsByTagName("body")[0].classList.remove("dark"); 
                        document.getElementsByTagName("body")[0].classList.add("light");
                    }
                }}>
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