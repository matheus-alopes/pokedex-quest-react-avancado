import styled from "styled-components"

const PageCounterSectionContainer = styled.div`
    position: absolute;
    left: 10px;
    top: 180px;
    width: 160px;
    height: 160px;
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
const PageCounterContainer = styled.div`
    width: 115px;
    height: 50px;
    background-color: var(--button-background-hover-color);
    box-shadow: inset 0 0 8px var(--button-border-color);
    border: 4px inset var(--button-border-color);
    border-radius: 8px;
    position: relative;
    display: flex;
`

const ActualPageContainer = styled.input`
    width: 50%;
    height: 100%;
    background-color: var(--button-background-color);
    font-size: 24px;
    color: var(--button-font-color);
    border: none;
    border-radius: 8px 0 0 8px;
`

const AmountOfPageContainer = styled.div`
    width: 50%;
    height: 100%;
    // background-color: brown;
    border-left: 1px solid black;
    border-radius: 0 8px 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const AmountOfPageTitle = styled.p`

`

const AmountOfPage = styled.p`
    
`

export { PageCounterSectionContainer, PageCounterSectionTitle, PageCounterContainer, ActualPageContainer, AmountOfPageContainer, AmountOfPageTitle, AmountOfPage }