import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButton, BackButtonContainer, BackButtonText, PokemonContainer } from "./styles"

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
                    <BackButton></BackButton>
                </Link>

                <BackButtonText>
                    VOLTAR
                </BackButtonText>
            </BackButtonContainer>

            <PokemonContainer>
                <h1 className="pokemon-name">{pokemon.name}</h1>

                <div className="pokemon-image-container"></div>

                <div className="pokemon-type-container"></div>

                <div className="pokemon-moves-container"></div>

                <div className="pokemon-abilities-container"></div>
            </ PokemonContainer> 
        </>
    )
}