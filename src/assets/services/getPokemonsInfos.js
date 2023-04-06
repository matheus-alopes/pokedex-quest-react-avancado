async function getPokemonsLinks() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    const response = await fetch(url);

    const data = await response.json();

    return data.results;
}

async function getPokemonDescription(url) {
    const descriptionResponse = await fetch(url);

    const descriptionData = await descriptionResponse.json();

    const listOfDescriptions = descriptionData.flavor_text_entries;

    await console.log(listOfDescriptions);

    const description = listOfDescriptions[6].flavor_text;

    const filteredDescription = description.replace(/[^a-zA-Z0-9,é,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais

    const pokemonDescription = filteredDescription.replace(/[/é]/g, "É"); //filtrando a descrição final, para ter o caractere "é" em maiúsculo

    return pokemonDescription;
}

async function getPokemonInfos(pokemonUrl) {
    const response = await fetch(pokemonUrl);

    const data = await response.json();

    const pokemonImage = data.sprites.front_default;

    data.image = pokemonImage;

    const descriptionUrl = data.species.url;

    const pokemonDescription = await getPokemonDescription(descriptionUrl);
    
    data.description = pokemonDescription; 
    
    await console.log(data)

    return data;
}

export async function getPokemonsList() {
    const listOfPokemons = await getPokemonsLinks();

    await Promise.all(
        listOfPokemons.map (
            async pokemon => {
                const url = pokemon.url;

                const pokemonData = await getPokemonInfos(url)
    
                pokemon.image = pokemonData.image;

                pokemon.description = pokemonData.description;
            }
        )
    )
    
    await console.log(listOfPokemons);

    return listOfPokemons
}