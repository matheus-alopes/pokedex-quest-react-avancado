async function getPokemonsLinks(notebookPage) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${notebookPage}0`;

    const response = await fetch(url);

    const data = await response.json();

    return data.results;
}

async function getPokemonDescription(url) {
    const descriptionResponse = await fetch(url);

    const descriptionData = await descriptionResponse.json();

    const listOfDescriptions = descriptionData.flavor_text_entries;

    console.log(listOfDescriptions);

    // let description = listOfDescriptions[6].flavor_text; //Scyther e Porigon, por exemplo, apresentam problema nessa descrição (uma é apenas um ponto, a outra não está em inglês)

    // if(listOfDescriptions[6].language.name != "en") {
    //     description = listOfDescriptions[7].flavor_text;

    //     if (listOfDescriptions[7].language.name != "en") {
    //         if (listOfDescriptions[5].language.name == "en") {
    //             description = listOfDescriptions[5].flavor_text;
    //         } if (listOfDescriptions[5].language.name != "en"){
    //             description = listOfDescriptions[37].flavor_text;
    //         } if (listOfDescriptions[37].language.name != "en"){
    //             description = listOfDescriptions[8].flavor_text;
    //         } if (listOfDescriptions[8].language.name != "en"){
    //             description = "meu cu";
    //         }
    //     }
    // }

    for(let i = 0; i <= listOfDescriptions.length; i++) {
                if(listOfDescriptions[i].language.name == "en") {
                    let description = listOfDescriptions[i].flavor_text;

                    return description
                }
            }

    const filteredDescription = description.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais

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

    return data;
}

async function getPokemonsList(notebookPage) {
    const listOfPokemons = await getPokemonsLinks(notebookPage);

    await Promise.all(
        listOfPokemons.map (
            async pokemon => {
                const url = pokemon.url;

                const pokemonData = await getPokemonInfos(url)
    
                pokemon.image = pokemonData.image;

                pokemon.description = pokemonData.description;

                // console.log(pokemon)
            }
        )
    )

    return listOfPokemons
}

export {getPokemonsList}