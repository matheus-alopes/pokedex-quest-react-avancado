import styled from "styled-components"

const PageCounterSectionContainer = styled.div`
    width: 150px;
    height: 150px;
    padding: 20px 0;
    background-color: var(--button-background-color);
    border: 1px solid var(--background-color);
    border-radius: 40%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -1000px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    color: var(--button-font-color);
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const PageCounterSectionTitle = styled.h2`
    font-weight: 500;
`
const PageCounter = styled.input`
    width: 80px;
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

export { PageCounterSectionContainer, PageCounterSectionTitle, PageCounter }