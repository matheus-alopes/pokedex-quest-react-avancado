import { useContext } from "react";
import { ThemeContext } from "../../themes/theme-provider";
import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle, TogglerButton, ThemesContainer, LightTheme, DarkTheme, Toggler } from "./styles"

export const ThemeTogglerButton = () => {
    const toggler = document.getElementById("toggler");
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <TogglerButton 
                    onClick = {
                        ()=> {
                            if (theme == "light") {
                                toggleTheme();

                                toggler.classList.remove("up-animation");
                                toggler.classList.add("down-animation");
                            } 
                            
                            else if (theme == "dark") {
                                toggleTheme();

                                toggler.classList.remove("down-animation");
                                toggler.classList.add("up-animation");
                            }
                        }
                    }
                >
                    <Toggler id="toggler" />
                </TogglerButton>

                <ThemesContainer>
                    <LightTheme>Light</LightTheme>

                    <DarkTheme>Dark</DarkTheme>
                </ThemesContainer>
            </ThemeTogglerButtonContainer>
        </ThemeTogglerContainer>
    )
}