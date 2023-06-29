import styled from "styled-components"

const NotebookContainer = styled.div`
    min-height: 100vh;
    width: 95vw;
    max-width: 1400px;
    margin: auto;
    background-image: var(--notebook-background-image);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
`

const Header = styled.header`
    grid-area: header;
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderTitle = styled.h1`
    font-size: 40px;
    color: var(--header-title-font-color);
    @media (max-width: 700px) {
        font-size: 34px;
    };
`

const HeaderImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`

export {NotebookContainer, Header, HeaderTitle, HeaderImage}