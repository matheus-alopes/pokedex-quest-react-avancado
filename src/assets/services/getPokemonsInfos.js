async function getPokemonsLinks() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const response = await fetch(url);

    const data = await response.json();

    return data.results;
}

async function getPokemonInfos(pokemonUrl) {
     const response = await fetch(pokemonUrl);

     const data = await response.json();

     return data;
}

export async function getPokemonsList() {
    const listOfPokemons = await getPokemonsLinks();

    await Promise.all(
        listOfPokemons.map (
            async pokemon => {
                const url = pokemon.url;
    
                const pokemonData = await getPokemonInfos(url)
    
                pokemon.image = pokemonData.sprites.front_default
            }
        )
    )
    
    await console.log(listOfPokemons);

    return listOfPokemons
}