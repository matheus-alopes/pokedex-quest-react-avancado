import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPokemonDetails } from "../../services/getPokemonDetails"

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
            <Link to="/">
                <button>VOLTAR</button>
            </Link>

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