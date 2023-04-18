import styled, {keyframes} from "styled-components"

const NextButtonContainer = styled.div`
    position: absolute;
    right: 0;
    height: 152px;
    width: 130px;
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NextButton = styled.button`
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 0px 15px;
    background-color: var(--button-background-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: var(--button-background-hover-color);
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

const NextButtonImage = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    background-image: var(--button-image);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${ArrowAnimation} 1s ease-in-out infinite;
`

const NextButtonText = styled.p`
    color: var(--button-font-color);
`

export {NextButtonContainer, NextButton, NextButtonImage, NextButtonText}