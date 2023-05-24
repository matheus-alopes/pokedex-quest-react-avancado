import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"
import { BackButtonSection } from "../back-button-section"
import { PokemonAbilityContainer, PokemonAbilityDescription, PokemonAbilityName, PokemonAbilitiesContainer, PokemonContainer, PokemonImage, PokemonImageContainer, PokemonMovesContainer, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeList, PokemonAbilitiesTitle, PokemonAbilities, PokemonImageAndNameContainer, PokemonMove, PokemonMoves, PokemonMovesTitle } from "./styles"
import { ThemeContext } from "../../contexts/theme-provider"

export const PokemonDetails = () => {
    const {id} = useParams();

    const [pokemon, setPokemon] = useState({})
    
    const {theme} = useContext(ThemeContext)

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
        <div id="notebook-container" className={`${theme} details`}>
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
        </ div>
    )
}