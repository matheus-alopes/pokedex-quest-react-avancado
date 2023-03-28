async function getPokemonsList() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

export async function getPokemonsInfos() {
    const pokemonListDatas = await getPokemonsList();

    let pokemonList = pokemonListDatas.results;

    pokemonList.forEach(
        async pokemon => {
            const url = pokemon.url;

            const response = await fetch(url);

            const data = await response.json();

            pokemon.image = data.sprites.front_default;

            pokemon.type = data.types;

            pokemon.abilities = data.abilities

            pokemon.moves = data.moves;
        }
    );

    return pokemonList;
}