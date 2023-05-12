import styled from "styled-components"

const PageCounterSectionContainer = styled.div`
    position: absolute;
    left: 10px;
    top: 180px;
    width: 150px;
    height: 150px;
    padding: 20px 0;
    background-color: var(--button-background-color);
    border-radius: 50%;
    color: var(--button-font-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const PageCounterSectionTitle = styled.h2`
    font-weight: 500;
`
const PageCounterContainer = styled.input`
    width: 100px;
    height: 50px;
    background-color: var(--button-background-hover-color);
    box-shadow: inset 0 0 8px var(--button-border-color);
    border: 4px inset var(--button-border-color);
    border-radius: 8px;
    font-size: 28px;
    text-align: center;
    color: var(--button-font-color);
    &:focus {
        outline: none;
    }
`

export { PageCounterSectionContainer, PageCounterSectionTitle, PageCounterContainer }