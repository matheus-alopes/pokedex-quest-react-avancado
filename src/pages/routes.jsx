import {BrowserRouter, Routes, Route} from "react-router-dom"
import { PokemonDetailsPage } from "./pokemon-details"
import { PokemonsListPage } from "./pokemons-list"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonsListPage/>} />

                <Route exact path="/pokemon/:id" element={<PokemonDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes}