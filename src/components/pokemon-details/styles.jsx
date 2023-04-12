import styled, {keyframes} from "styled-components"
import pokemonDetailsBackground from "../../assets/images/pokemon-details-background.jpg"

const BackButtonContainer = styled.div`
    position: absolute;
    left: 50px;
    height: 100vh;
    width: 120px;
    background-color: rgb(240,248,255, 0.7);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BackButton = styled.button`
    margin-bottom: 30px;
    width: 80px;
    height: 80px;
    border: 1px solid rgb(240,248,255, 0.7);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 5px 15px;
    background-color: rgb(240,248,255, 0.7);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: rgb(137, 207, 240, 0.8);
    }
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
`

const ArrowAnimation = keyframes`
    0% {
        transform: translateX(2px);
    }
    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(2px);
    }
`

const BackButtonImage = styled.img`
    width: 26px;
    position: absolute;
    animation: ${ArrowAnimation} 1s ease-in-out infinite;
`

const BackButtonText = styled.p`
    // color: rgb(0, 150, 255);
`

const PokemonContainer = styled.div`
    margin: 40px 30px 0 30px;
    // display: flex;
    // flex-direction: column;
    // display: grid;
    // grid-template-areas: 
`

const PokemonImageAndNameContainer = styled.div`
    display: flex;
    
`

const PokemonImageContainer = styled.div`
    width: 500px;
    height: 200px;
    margin-right: 40px;
    border-radius: 5px;
    background-image: url(${pokemonDetailsBackground});
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center
`

const PokemonImage = styled.img`
    min-width: 200px;
`

const PokemonName = styled.h1`
    margin: 15px 0;
    text-transform: uppercase;
`

const PokemonTypeContainer = styled.div`
    display: flex;
`

const PokemonTypeList = styled.ul`
    display: flex;
    align-items: center;
`

const PokemonType = styled.li`
    margin: 0 10px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 5px;
`

const PokemonAbilitiesAndMovesContainer = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 100px;
`

const PokemonAbilitiesContainer = styled.div`
    padding: 20px;
    min-width: 500px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: rgb(115, 147, 179, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonAbilities = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const PokemonAbilitiesTitle = styled.h2`
    width: 80%;
    margin-bottom: 30px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid black;
`

const PokemonAbilityContainer = styled.li`
    margin: 0 10px;
    max-width: 200px;
    height: 160px;
    max-height: 260px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: rgb(255, 255, 255, 0.7);
`

const PokemonAbilityName = styled.p`
    margin-bottom: 10px;
    padding-top: 5px;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    border-bottom: 2px dashed black;
    border-radius: 15px 15px 0 0;
    background-color: rgb(255, 0, 0, 0.7);
`

const PokemonAbilityDescription = styled.p`
    padding: 0 10px;
`

const PokemonMovesContainer = styled.div`
    padding: 20px;
    max-height: 400px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: rgb(115, 147, 179, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonMovesTitle = styled.h2`
    width: 80%;
    margin-bottom: 30px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid black;
`

const PokemonMoves = styled.ul`
    overflow: scroll;
    overflow-x: hidden;
`

const PokemonMove = styled.li`
    margin: 0 10px;
    display: inline-block;
`

export {BackButtonContainer, BackButton, BackButtonImage, BackButtonText, PokemonContainer, PokemonImageAndNameContainer, PokemonImageContainer, PokemonImage, PokemonName, PokemonTypeContainer, PokemonTypeList, PokemonType, PokemonAbilitiesAndMovesContainer, PokemonAbilitiesContainer, PokemonAbilitiesTitle, PokemonAbilities, PokemonAbilityContainer, PokemonAbilityName, PokemonAbilityDescription, PokemonMovesContainer, PokemonMovesTitle, PokemonMoves, PokemonMove}