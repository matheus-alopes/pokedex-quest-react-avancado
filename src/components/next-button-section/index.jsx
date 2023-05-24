import { useContext } from "react"
import { PageCounterContext } from "../../contexts/page-counter-provider"
import { NextButton, NextButtonContainer, NextButtonImage, NextButtonText } from "./styles"

export const NextButtonSection = (props) => {
    const { setNotebookPageCounter } = useContext(PageCounterContext);

    function handleNext() {
        setNotebookPageCounter (
            (count) => count + 1
        )
    }

    return (
        <NextButtonContainer>
                <NextButton onClick={handleNext}>
                    <NextButtonImage/>
                </NextButton>

                <NextButtonText>
                    NEXT
                </NextButtonText>
        </NextButtonContainer>
    )
}