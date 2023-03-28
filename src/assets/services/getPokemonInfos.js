async function getPokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

export async function getPokemonInfos() {
    let pokemonList = await getPokemonList();

    console.log(pokemonList.results);

    pokemonList.results.forEach(
        pokemon => {
            
        }
    );
}