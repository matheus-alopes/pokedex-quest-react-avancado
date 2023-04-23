import pokeball from "./assets/images/pokeball.png"
import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./themes/theme-provider"

function App() {
  return (
      <ThemeProvider>
        <div id="notebook-container" className={localStorage.theme}>
          <header>
            <img src={pokeball} alt="pokeball" className="pokeball" />
            
            <h1 className="notebook-title">Pokémon Diary</h1>
          </header>

          <AppRoutes />
        </div>
      </ThemeProvider>
  )
}

export default App