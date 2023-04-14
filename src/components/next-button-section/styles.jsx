import styled, {keyframes} from "styled-components"

const NextButtonContainer = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    min-height: 100vh;
    width: 120px;
    background-color: rgb(240,248,255, 0.7);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NextButton = styled.button`
    margin-bottom: 30px;
    width: 80px;
    height: 80px;
    border: 1px solid rgb(240,248,255, 0.7);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 0px 15px;
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
    transform: rotate(180deg);
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

const NextButtonImage = styled.img`
    width: 26px;
    position: absolute;
    animation: ${ArrowAnimation} 1s ease-in-out infinite;
`

const NextButtonText = styled.p`
    // color: rgb(0, 150, 255);
`

export {NextButtonContainer, NextButton, NextButtonImage, NextButtonText}