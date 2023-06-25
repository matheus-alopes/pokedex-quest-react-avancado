import styled from "styled-components"

const PokemonContainer = styled.div`
    margin: 40px 30px 0 30px;
    display: grid;
    grid-template-areas: "base-infos stats"
                         "abilities abilities"
                         "moves moves";
    grid-template-columns: 1fr 1fr;
    color: var(--pokemon-details-font-color);
`

const PokemonImageAndNameContainer = styled.div`
    grid-area: base-infos;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonImageContainer = styled.div`
    width: 100%;
    max-width: 500px;
    min-width: 400px;
    max-height: 300px;
    min-height: 250px;
    border-radius: 5px;
    background-image: var(--pokemon-details-background-image);
    background-size: cover;
    background-position:bottom;
    display: flex;
    justify-content: center;
    position: relative;
`

const PokemonImage = styled.img`
    width: 180px;
    max-height: 220px;
    position: absolute;
    bottom: 3px;
`

const PokemonName = styled.h1`
    margin: 15px 0;
    text-transform: uppercase;
    color: var(--pokemon-details-name-color);
`

const PokemonTypeContainer = styled.div`
    display: flex;
`

const PokemonTypeList = styled.ul`
    display: flex;
    align-items: center;
`

const PokemonType = styled.li`
    margin: 0 10px;
    padding: 3px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 5px;
`

const PokemonStatsContainer = styled.div`
    grid-area: stats;
    padding: 20px 30px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonStatsTitle = styled.h2`
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`

const PokemonStatsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`

const PokemonStatContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
`

const PokemonStatName = styled.p`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
`

const PokemonStat = styled.p`
    font-size: 20px;
`

const PokemonAbilitiesContainer = styled.div`
    grid-area: abilities;
    margin-top: 40px;
    padding: 20px 0;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonAbilitiesTitle = styled.h2`
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`

const PokemonAbilities = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const PokemonAbilityContainer = styled.li`
    margin: 10px;
    max-width: 210px;
    height: 150px;
    max-height: 260px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: var(--pokemon-ability-container-color);
`

const PokemonAbilityName = styled.p`
    margin-bottom: 10px;
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px dashed var(--pokemon-details-border-color);
    border-radius: 15px 15px 0 0;
    background-color: var(--pokemon-ability-name-container-color);
`

const PokemonAbilityDescription = styled.div`
    max-height: 100px;
    padding: 0 10px;
    text-align: justify;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        border: 1px solid black;
    };
    &::-webkit-scrollbar-track {
        background: var(--pokemon-ability-container-color);
    };
`

const PokemonMovesContainer = styled.div`
    grid-area: moves;
    margin-top: 40px;
    padding: 20px;
    max-height: 400px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokemonMovesTitle = styled.h2`
    width: 80%;
    margin-bottom: 25px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`

const PokemonMoves = styled.ul`
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        border: 1px solid black;
    };
    &::-webkit-scrollbar-track {
        background: var(--pokemon-ability-container-color)
    }
`

const PokemonMove = styled.li`
    margin: 3px 10px;
    padding: 3px;
    display: inline-block;
    border: 1px solid var(--pokemon-details-border-color);
`

export {PokemonContainer, PokemonImageAndNameContainer, PokemonImageContainer, PokemonImage, PokemonName, PokemonTypeContainer, PokemonTypeList, PokemonType, PokemonStatsContainer, PokemonStatsTitle, PokemonStatsList, PokemonStatContainer, PokemonStatName, PokemonStat, PokemonAbilitiesContainer, PokemonAbilitiesTitle, PokemonAbilities, PokemonAbilityContainer, PokemonAbilityName, PokemonAbilityDescription, PokemonMovesContainer, PokemonMovesTitle, PokemonMoves, PokemonMove}