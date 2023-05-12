import { useContext } from "react";
import { PageCounterContainer, PageCounterSectionContainer, PageCounterSectionTitle } from "./styles";
import { ThemeContext } from "../../themes/theme-provider";

export const PageCounterSection = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <PageCounterSectionContainer>
            <PageCounterSectionTitle>
                Page
            </PageCounterSectionTitle>

            <PageCounterContainer>
                
            </PageCounterContainer>
        </PageCounterSectionContainer>
    )
}