import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText, PokemonContainer, PokemonImage, PokemonImageContainer, PokemonText } from "./styles"
import arrow from "../../assets/images/left-arrow.png"

export const PokemonDetails = () => {
    const {id} = useParams();

    const [pokemon, setPokemon] = useState({})
    
    useEffect(
        () => {
            async function fetchPokemon() {
                const pokemon = await getPokemonDetails(id);

                setPokemon(pokemon);
            }

            fetchPokemon();
        },

        []
    )

    return (
        <>
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

            <PokemonContainer>
                <PokemonImageContainer>
                    <PokemonImage src={pokemon.image} />
                </PokemonImageContainer>

                <PokemonText>{pokemon.name}</PokemonText>

                <div className="pokemon-type-container"></div>

                <div className="pokemon-moves-container"></div>

                <div className="pokemon-abilities-container"></div>
            </ PokemonContainer> 
        </>
    )
}