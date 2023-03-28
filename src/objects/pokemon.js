export const Pokemon = {
    name: "",
    image: "",
    type: "",
    description: "",
    moves: [],
    abilities: [],

    setInfos(PokemonInfos) {
        this.name = PokemonInfos.name;
    }
}