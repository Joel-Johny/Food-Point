import React,{createContext} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = React.useState("light")

    function toggleTheme(){
        setTheme(theme=="light"?"dark":"light")
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => React.useContext(ThemeContext)


export default ThemeContext