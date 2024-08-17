

import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import { useEffect } from 'react'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'


function App() {

    const[themeMode,setThemeMode] = useState("light")

    const lightTheme=()=>{
        setThemeMode("light")
    }

    const darkTheme=()=>{
        setThemeMode("dark")
    }

    //actual change in a theme //useEffect code doen't belong to context its just an another code in the file

    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark")  //we are removing previously present mode since we don't know what it consists of so if any mode is present wheather it is light or dark remove it if both are present remove it 
        document.querySelector('html').classList.add(themeMode)//we are adding what the user wants 
    },[themeMode]) //whenever there is a change in theme mode then we want the useEffect to run again .hence the dependency


  return (
   <ThemeProvider value={{themeMode,lightTheme,darkTheme }}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
    </div>
   </ThemeProvider>
  )
}

export default App



