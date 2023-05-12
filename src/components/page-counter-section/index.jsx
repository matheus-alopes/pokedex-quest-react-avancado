import { useContext } from "react";
import { PageCounterContainer, PageCounterSectionContainer, PageCounterSectionTitle } from "./styles";
import { ThemeContext } from "../../themes/theme-provider";

export const PageCounterSection = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <PageCounterSectionContainer>
            <PageCounterSectionTitle>
                Page
            </PageCounterSectionTitle>

            <PageCounterContainer  value={props.page} onChange={props.counterInputChangeFunction}/>
        </PageCounterSectionContainer>
    )
}