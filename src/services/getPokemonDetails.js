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

                const data = await getAbilityDetails(url)

                const abilityDescription = data.flavor_text_entries[0].flavor_text;

                ability.description = abilityDescription;   
            }
        )
    )

    return pokemon
}

export {getPokemonDetails}