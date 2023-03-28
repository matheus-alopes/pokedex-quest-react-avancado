export const Pokemon = {
    name: "",
    image: "",
    type: "",
    description: "",
    moves: [],

    setInfos(PokemonInfos) {
        this.name = PokemonInfos.name;
    }
}