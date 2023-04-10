async function getPokemonDetails(pokemonUrl) {
    const response = await fetch(pokemonUrl);

    const data = await response.json();

    await console.log(data)

    const pokemon = {
        name: data.name,
    }


    return pokemon
}

export {getPokemonDetails}