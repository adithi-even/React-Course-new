import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "adithi " ,
    age: 21 
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username=" hello" btnText="click me !"/>
      <Card username=" adithi" />
      {/* <Card username=" adithi" btnText="view profile !" /> */}
    
    </>
  )
}

export default App

//coz we took the card and app_card from the deleted src
