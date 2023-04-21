import { createContext, useState } from "react";
import { themes } from "./themes";


export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    let actualTheme = themes.light;
    
    const [theme, setTheme] = useState(actualTheme);

    return (
        <ThemeContext.Provider value={{themes, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}