import pokeball from "./assets/images/pokeball.png"
import { Pokemons } from "./components/pokemons-list/pokemons"

function App() {
  return (
      <div className="notebook-container">
        <header>
          <img src={pokeball} alt="pokeball" className="pokeball" />
          
          <h1 className="notebook-title">Pokémon Diary</h1>
        </header>
      
        <Pokemons />
      </div>
  )
}

export default App