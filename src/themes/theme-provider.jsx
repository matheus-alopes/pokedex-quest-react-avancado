import { createContext } from "react";
import { themes } from "./themes";


const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}