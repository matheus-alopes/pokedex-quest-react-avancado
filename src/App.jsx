import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./themes/theme-provider"

function App() {
  return (
      <ThemeProvider>
          <AppRoutes />
      </ThemeProvider>
  )
}

export default App