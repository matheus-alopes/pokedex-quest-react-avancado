export async function getPokemonsLinks() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

export async function getPokemonsInfos() {
    let listOfPokemons = [];
    
    await getPokemonsLinks().then(data => listOfPokemons = data.results)

    listOfPokemons.forEach (
        async pokemon => {
            const url = pokemon.url;

            const response = await fetch(url);

            const data = await response.json();

            pokemon.image = data.sprites.front_default;

            pokemon.type = data.types;

            pokemon.abilities = data.abilities

            pokemon.moves = data.moves;
        }
    )
    
    await console.log(listOfPokemons);

    return listOfPokemons
}