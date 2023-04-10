import styled from "styled-components"

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
`

const BackButtonText = styled.p`
    
`

const PokemonContainer = styled.div`
    background-color: red;
`




export {BackButtonContainer, BackButton, BackButtonText, PokemonContainer}