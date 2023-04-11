import styled, {keyframes} from "styled-components"

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
        transform: translateX(4px);
    }
    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(4px);
    }
`

const BackButtonImage = styled.img`
    width: 26px;
    position: absolute;
    animation: ${ArrowAnimation} 1s ease-in-out infinite;
`

const BackButtonText = styled.p`
    
`

const PokemonContainer = styled.div`
    background-color: red;
`

export {BackButtonContainer, BackButton, BackButtonImage, BackButtonText, PokemonContainer}