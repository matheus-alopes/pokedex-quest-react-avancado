import arrow from "../../assets/images/left-arrow.png"
import { NextButton, NextButtonContainer, NextButtonImage, NextButtonText } from "./styles"

export const NextButtonSection = (props) => {

    return (
        <NextButtonContainer>
                <NextButton onClick={props.clickFunction}>
                    <NextButtonImage src={arrow}/>
                </NextButton>

                <NextButtonText>
                    NEXT
                </NextButtonText>
        </NextButtonContainer>
    )
}