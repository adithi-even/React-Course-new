import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})  //default value i.e., an object coz of theme mode

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
 

//Based on the search results, "React.createContext()" and "createContext" are essentially the same function, as they are both provided by React’s Context API. The main difference lies in the context in which they are used.

//"React.createContext() "is the official method provided by React, whereas "createContext" might be a shorthand or an alias used in certain situations or libraries. However, both methods serve the same purpose: creating a Context object that enables components to share state and props throughout the component tree.