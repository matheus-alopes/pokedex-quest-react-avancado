import {NotebookContainer, Header, HeaderTitle, HeaderImage} from "./styles"
import pokeball from "../../assets/images/pokeball.png"
import { Pokemons } from "../pokemons-list";
import { useContext } from "react";
import { ThemeContext } from "../../themes/theme-provider";

export const Diary = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <NotebookContainer id="notebook-container" className={theme}>
            <Header>
                <HeaderImage src={pokeball} alt="pokeball" />

                <HeaderTitle>Pokemon Diary</HeaderTitle>
            </Header>
            
            <Pokemons />
        </NotebookContainer>
    )
}