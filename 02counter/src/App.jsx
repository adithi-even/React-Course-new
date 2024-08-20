import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15) 
  //0th index is the variable and 1st index is the method/function which controls the variable and also responsible for updation of the variable
  //the value inside the useState() is its a default value for a variable, where we have given the variable name in this case it is 'counter' and its value is 15 // we can give any data type as the value for a variable

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if (counter < 20){
      setCounter(counter + 1)
      // setCounter((prevCounter)=>prevCounter+1) //here prevCounter is the last updated state/value of the counter.so by adding the prevCounter as a parameter tehn we can give the defn of the funvtion now if we give multiple lines of same counter +1 then the answer gonna change 

     }

  }

  const removeValue = () => {
    if (counter > 0 ){

      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App