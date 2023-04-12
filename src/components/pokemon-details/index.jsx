import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText, PokemonAbilitiesAndMovesContainer, PokemonAbilitiesContainer, PokemonContainer, PokemonImage, PokemonImageContainer, PokemonMovesContainer, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeList } from "./styles"
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

                <PokemonName>{pokemon.name}</PokemonName>

                <PokemonTypeContainer>
                    <h3>Type:</h3>

                    <PokemonTypeList>
                        {
                             pokemon.types && pokemon.types.map(
                                type => <PokemonType key={type.slot}>{type.type.name}</PokemonType>
                            )
                        }
                    </PokemonTypeList>
                </PokemonTypeContainer>

                <PokemonAbilitiesAndMovesContainer>
                    <PokemonAbilitiesContainer>
                        
                    </PokemonAbilitiesContainer>

                    <PokemonMovesContainer>
                        
                    </PokemonMovesContainer>
                </PokemonAbilitiesAndMovesContainer>
            </ PokemonContainer> 
        </>
    )
}