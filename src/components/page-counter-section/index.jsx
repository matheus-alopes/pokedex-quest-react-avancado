import { useContext } from "react";
import { PageCounter, PageCounterSectionContainer, PageCounterSectionTitle } from "./styles";
import { ThemeContext } from "../../themes/theme-provider";

export const PageCounterSection = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <PageCounterSectionContainer>
            <PageCounterSectionTitle>
                Page
            </PageCounterSectionTitle>

            <PageCounter
                value={props.inputPageValue}
                onChange={props.inputPageNumberChangeFunction}
            />
        </PageCounterSectionContainer>
    )
}