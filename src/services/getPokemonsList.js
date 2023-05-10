async function getPokemonsLinks(notebookPage) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${notebookPage}0`; //A lista vai até a página 128

    const response = await fetch(url);

    const data = await response.json();

    // const alternativeResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
    // const alternativeData = await alternativeResponse.json()
    // const amountOfPokemon = alternativeData.count
    // const allPokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${amountOfPokemon}`);
    // const allPokemonData = await allPokemonList.json();
    // await console.log(allPokemonData);

    // Próxima missão: gerar logo a lista com todos os pokemons, para, ao trocar de página, só pegar 10 itens diferentes dessa lista

    return data.results;
}

async function getPokemonDescription(url) {
    const descriptionResponse = await fetch(url);

    const descriptionData = await descriptionResponse.json();

    const listOfDescriptions = descriptionData.flavor_text_entries;

    for(let i = 0; i <= listOfDescriptions.length; i++) {
        if (listOfDescriptions[i]) {
            if(listOfDescriptions[i].language.name == "en") {
                let description = listOfDescriptions[i].flavor_text;
    
                const filteredDescription = description.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais
    
                const pokemonDescription = filteredDescription.replace(/[/é]/g, "É"); //filtrando a descrição final, para ter o caractere "é" em maiúsculo
    
                return pokemonDescription;
            }
        } else {
            for(let i = 0; i <= descriptionData.genera.length; i++) {
                if(descriptionData.genera[i].language.name == "en") {
                    let description = descriptionData.genera[i].genus;
    
                    const pokemonDescription = description.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g, " "); //filtrando o texto, para não ter caracteres especiais
        
                    return pokemonDescription;
                }

                if(!descriptionData.genera) {
                    const pokemonDescription = "No data yet."

                    return pokemonDescription
                }
            }
        }
    }
}

async function getPokemonInfos(pokemonUrl) {
    const response = await fetch(pokemonUrl);

    const data = await response.json();

    if(data.sprites.front_default) {
        const pokemonImage = data.sprites.front_default;

        data.image = pokemonImage;
    } else {
        const pokemonImage = data.sprites.other["official-artwork"].front_default;

        data.image = pokemonImage;
    }

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
            }
        )
    )

    return listOfPokemons
}

export {getPokemonsList}