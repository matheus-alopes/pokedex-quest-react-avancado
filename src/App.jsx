import pokeball from "./assets/images/pokeball.png"
import { AppRoutes } from "./pages/routes"

function App() {
  return (
      <div className="notebook-container">
        <header>
          <img src={pokeball} alt="pokeball" className="pokeball" />
          
          <h1 className="notebook-title">Pokémon Diary</h1>
        </header>
      
        <AppRoutes />
      </div>
  )
}

export default App