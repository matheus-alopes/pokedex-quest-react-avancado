import pokeball from "./assets/images/pokeball.png"

function App() {
  return (
    <>
      <div className="notebook-container">
        <header>
          <img src={pokeball} alt="pokeball" className="pokeball" />
          
          <h1 className="notebook-title">Pokémon Diary</h1>
        </header>
      
        <ul className="pokemons-list">
          <li className="pokemon">
            <a href="" className="podemon-container">
              <img src="" alt="" className="pokemon-img" />

              <p className="pokemon-name"></p>

              <p className="pokemon-description"></p>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
