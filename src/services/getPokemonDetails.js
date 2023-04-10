async function getPokemonDetails(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

    const data = await response.json();

    await console.log(data)

    const pokemon = {
        name: data.name,
    }

    return pokemon
}

export {getPokemonDetails}