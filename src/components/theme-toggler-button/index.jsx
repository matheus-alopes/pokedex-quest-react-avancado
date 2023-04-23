import { ThemeTogglerButtonContainer, ThemeTogglerContainer, ThemeTogglerTitle, TogglerButton, ThemesContainer, LightTheme, DarkTheme, Toggler } from "./styles"

export const ThemeTogglerButton = () => {
    const actualTheme = document.getElementById("notebook-container").classList;
    const toggler = document.getElementById("toggler");

    return (
        <ThemeTogglerContainer>
            <ThemeTogglerTitle>
                Theme
            </ThemeTogglerTitle>

            <ThemeTogglerButtonContainer>
                <TogglerButton 
                    onClick = {
                        ()=> {
                            if (actualTheme == "light") {
                                actualTheme.remove("light");
                                actualTheme.add("dark");
                                
                                toggler.classList.remove("up-animation");
                                toggler.classList.add("down-animation");

                                localStorage.setItem("theme", "dark");
                            } 
                            
                            else if (actualTheme == "dark") {
                                actualTheme.remove("dark"); 
                                actualTheme.add("light");

                                toggler.classList.remove("down-animation");
                                toggler.classList.add("up-animation");

                                localStorage.setItem("theme", "light");
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