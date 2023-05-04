async function getAbilityDetails(abilityUrl) {
    const response = await fetch(abilityUrl);

    const data = await response.json();

    return data;
}

async function getPokemonDetails(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

    const data = await response.json();

    await console.log(data)

    const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types,
        abilities: data.abilities,
        moves: data.moves,
    }

    await Promise.all(
        pokemon.abilities.map(
            async ability => {
                const url = ability.ability.url;

                const data = await getAbilityDetails(url);

                const abilityDescriptions = data.flavor_text_entries;

                for(let i = 0; i <= abilityDescriptions.length; i++) {
                    if(abilityDescriptions[i].language.name == "en") {
                        return ability.description = abilityDescriptions[i].flavor_text
                    }
                }
            }
        )
    )

    return pokemon
}

export {getPokemonDetails}