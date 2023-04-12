import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButton, BackButtonContainer, BackButtonImage, BackButtonText, PokemonAbilityContainer, PokemonAbilityDescription, PokemonAbilityName, PokemonAbilitiesAndMovesContainer, PokemonAbilitiesContainer, PokemonContainer, PokemonImage, PokemonImageContainer, PokemonMovesContainer, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeList, PokemonAbilitiesTitle, PokemonAbilities, PokemonImageAndNameContainer, PokemonMove, PokemonMoves, PokemonMovesTitle } from "./styles"
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
                <PokemonImageAndNameContainer>
                    <PokemonImageContainer>
                        <PokemonImage src={pokemon.image} />
                    </PokemonImageContainer>

                    <div>
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
                    </div>
                </PokemonImageAndNameContainer>

                <PokemonAbilitiesAndMovesContainer>
                    <PokemonAbilitiesContainer>
                        <PokemonAbilitiesTitle>ABILITIES</PokemonAbilitiesTitle>

                        <PokemonAbilities>
                            {
                                pokemon.abilities && pokemon.abilities.map(
                                    ability => 
                                        <PokemonAbilityContainer key={ability.slot}>
                                            <PokemonAbilityName>
                                                {ability.ability.name}
                                            </PokemonAbilityName>

                                            <PokemonAbilityDescription>
                                                {ability.description}
                                            </PokemonAbilityDescription>
                                        </PokemonAbilityContainer>
                                )
                            }
                        </PokemonAbilities>
                    </PokemonAbilitiesContainer>

                    <PokemonMovesContainer>
                        <PokemonMovesTitle>MOVES</PokemonMovesTitle>

                        <PokemonMoves>
                            {
                                pokemon.moves && pokemon.moves.map(
                                    move => 
                                        <PokemonMove key={move.move.name}>{move.move.name}</PokemonMove>
                                )
                            }
                        </PokemonMoves>
                    </PokemonMovesContainer>
                </PokemonAbilitiesAndMovesContainer>
            </ PokemonContainer> 
        </>
    )
}