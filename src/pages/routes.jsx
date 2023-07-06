import {BrowserRouter, Routes, Route} from "react-router-dom"
import { PokemonDetailsPage } from "./pokemon-details"
import { PokemonDiaryPage } from "./pokemon-diary"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/pokedex-quest-react-avancado" element={<PokemonDiaryPage/>} />

                <Route exact path="/pokemon/:id" element={<PokemonDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}