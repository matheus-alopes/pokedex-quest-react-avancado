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
    border: 1px solid white;
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
    margin: 60px 30px 0 0;
    background-color: rgb(115, 147, 179, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonImageContainer = styled.div`
    width: 600px;
    height: 200px;
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
    margin: 20px 0 10px 0;
    text-transform: uppercase;
    // font-weight: bold;
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

export {BackButtonContainer, BackButton, BackButtonImage, BackButtonText, PokemonContainer, PokemonImageContainer, PokemonImage, PokemonName, PokemonTypeContainer, PokemonTypeList, PokemonType}