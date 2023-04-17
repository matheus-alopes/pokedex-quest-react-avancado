import { createContext } from "react";
import { themes } from "./themes";


const ThemeContext = createContext({})

export const themeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}