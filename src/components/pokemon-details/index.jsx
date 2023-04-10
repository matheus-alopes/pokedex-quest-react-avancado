import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"

export const PokemonDetails = () => {
    const {id} = useParams();

    console.log(id);

    const [pokemon, setPokemon] = useState({})
    
    useEffect(
        () => {
            async function fetchPokemon() {
                // const pokemon = await getPokemonDetails();

                // setPokemon(pokemon);
            }

            // fetchPokemon();
        },

        []
    )

    return (
        <>
            <button>VOLTAR</button>

            <div className="pokemon-container">
                <h1 className="pokemon-name">{pokemon.name}</h1>

                <div className="pokemon-image-container"></div>

                <div className="pokemon-type-container"></div>

                <div className="pokemon-moves-container"></div>

                <div className="pokemon-abilities-container"></div>
            </div> 
        </>
    )
}