import { useContext } from "react";
import { ActualPageContainer, AmountOfPage, AmountOfPageContainer, AmountOfPageTitle, PageCounterContainer, PageCounterSectionContainer, PageCounterSectionTitle } from "./styles";
import { ThemeContext } from "../../themes/theme-provider";

export const PageCounterSection = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <PageCounterSectionContainer>
            <PageCounterSectionTitle>
                Page
            </PageCounterSectionTitle>

            <PageCounterContainer>
                <ActualPageContainer />

                <AmountOfPageContainer>
                    <AmountOfPageTitle>
                        Total
                    </AmountOfPageTitle>

                    <AmountOfPage>
                        128 {/* fazer esse número ser baseado no retornado pela função propriamente*/}
                    </AmountOfPage>
                </AmountOfPageContainer>
            </PageCounterContainer>
        </PageCounterSectionContainer>
    )
}