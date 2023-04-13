import { Link } from "react-router-dom"
import arrow from "../../assets/images/left-arrow.png"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText } from "./styles"

export const BackButtonSection = () => {
    return (
        <BackButtonContainer>
                <Link to="/">
                    <BackButton>
                        <BackButtonImage src={arrow}/>
                    </BackButton>
                </Link>

                <BackButtonText>
                    VOLTAR
                </BackButtonText>
        </BackButtonContainer>
    )
}