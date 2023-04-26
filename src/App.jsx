import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./themes/theme-provider"

function App() {
  window.addEventListener('beforeunload', () => {
    localStorage.clear();
  });

  return (
      <ThemeProvider>
          <AppRoutes />
      </ThemeProvider>
  )
}

export default App