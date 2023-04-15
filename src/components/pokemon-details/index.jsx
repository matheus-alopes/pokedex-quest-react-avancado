import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButtonSection } from "../back-button-section"
import { PokemonAbilityContainer, PokemonAbilityDescription, PokemonAbilityName, PokemonAbilitiesContainer, PokemonContainer, PokemonImage, PokemonImageContainer, PokemonMovesContainer, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeList, PokemonAbilitiesTitle, PokemonAbilities, PokemonImageAndNameContainer, PokemonMove, PokemonMoves, PokemonMovesTitle } from "./styles"

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
            <BackButtonSection height={"big"} />

            <PokemonContainer>
                <PokemonImageAndNameContainer>
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
                </PokemonImageAndNameContainer>

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
            </ PokemonContainer> 
        </>
    )
}