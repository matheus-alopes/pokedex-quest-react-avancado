async function getAbilityDetails(abilityUrl) {
    const response = await fetch(abilityUrl);

    const data = await response.json();
    
    return data;
}

async function getPokemonDetails(pokemonId) {
    
    if(pokemonId > 1010) {
        pokemonId = (pokemonId * 10) - (((pokemonId - 1000) * 10) - 1)
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)

    const data = await response.json();

    await console.log(data)

    const pokemon = {
        name: data.name,
        types: data.types,
        abilities: data.abilities,
        moves: data.moves,
    }

    if(data.sprites.front_default) {
        const pokemonImage = data.sprites.front_default;

        pokemon.image = pokemonImage;
    } else {
        const pokemonImage = data.sprites.other["official-artwork"].front_default;

        pokemon.image = pokemonImage;
    }

    await Promise.all(
        pokemon.abilities.map(
            async ability => {
                const url = ability.ability.url;

                const data = await getAbilityDetails(url);

                const abilityDescriptions = data.flavor_text_entries;

                if (abilityDescriptions.length > 0) {
                    for(let i = 0; i <= abilityDescriptions.length; i++) {
                        if(abilityDescriptions[i].language.name == "en") {
                            return ability.description = abilityDescriptions[i].flavor_text
                        }
                    }
                } else {
                    return ability.description = "No data yet."
                }
            }
        )
    )

    return pokemon
}

export {getPokemonDetails}