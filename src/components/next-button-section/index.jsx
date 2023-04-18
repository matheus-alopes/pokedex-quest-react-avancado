import { NextButton, NextButtonContainer, NextButtonImage, NextButtonText } from "./styles"

export const NextButtonSection = (props) => {

    return (
        <NextButtonContainer>
                <NextButton onClick={props.clickFunction}>
                    <NextButtonImage/>
                </NextButton>

                <NextButtonText>
                    NEXT
                </NextButtonText>
        </NextButtonContainer>
    )
}