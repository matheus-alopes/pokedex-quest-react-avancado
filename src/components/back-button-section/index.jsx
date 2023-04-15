import { Link } from "react-router-dom"
import arrow from "../../assets/images/left-arrow.png"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText } from "./styles"

export const BackButtonSection = (props) => {
    return (
        <BackButtonContainer height={props.height}>
                <Link to="/">
                    <BackButton onClick={props.clickFunction} height={props.height} disabled={props.disabled}>
                        <BackButtonImage src={arrow}/>
                    </BackButton>
                </Link>

                <BackButtonText>
                    BACK
                </BackButtonText>
        </BackButtonContainer>
    )
}