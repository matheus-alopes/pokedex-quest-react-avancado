import { createContext, useState } from "react";
// import { themes } from "./themes";


const ThemeContext = createContext()

const ThemeProvider = (props) => {  
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }