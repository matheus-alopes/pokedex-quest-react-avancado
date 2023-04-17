import styled, {css, keyframes} from "styled-components"

const BackButtonContainer = styled.div`
    position: absolute;
    left: 0;
    ${
        props => props.height == "small" && css `
            height: 152px;
        `
    }

    ${
        props => props.height == "big" && css `
            height: 100%;
        `
    }
    width: 130px;
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BackButton = styled.button`
    ${
        props => props.disabled == true && css `
        margin-bottom: 30px;
        `
    }

    ${
        props => props.height == "small" && css `
        margin-bottom: 10px;
        `
    }

    ${
        props => props.height == "big" && css `
        margin-bottom: 30px;
        `
    }

    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 5px 15px;
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
    color: var(--button-font-color);
`

export {BackButtonContainer, BackButton, BackButtonImage, BackButtonText}