import pokeball from "./assets/images/pokeball.png"
import { ThemeTogglerButton } from "./components/theme-toggler-button"
import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./themes/theme-provider"

function App() {
  return (
      <ThemeProvider>
        <div className="notebook-container">
          <header>
            <img src={pokeball} alt="pokeball" className="pokeball" />
            
            <h1 className="notebook-title">Pokémon Diary</h1>
          </header>

          <ThemeTogglerButton />

          <AppRoutes />
        </div>
      </ThemeProvider>
  )
}

export default App