import { useCallback, useState ,useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState({})

  // useRef hook
  const passwordRef = useRef(null)  //this ref and its value are talking with the variable password ref in the above 48th line
  //since they are conected now we have a reference of an element which we can manipulate  i.e., input eleement and from the variable copyPasswordToClipboard we are telling the useREf hook what to do 

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "+_)(*&^%$#@!{}[]-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)    //this line adds the single character every time the loop runs to check u can log it in the browser 
      // console.log(char,i );
      
      pass += str.charAt(char)  // see line 95-116 for example
      // console.log(pass);
      
    }
    setPassword(pass)

  } , [length, numberAllowed,charAllowed,setPassword])    // setpassword is for optimization if you dont want to give dont give

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() //selecting the password if there any 
    passwordRef.current?.setSelectionRange(0,20) //seleeeecting password on the basis of range 
    window.navigator.clipboard.writeText(password) //we are writing the password to clipboard
  },[password]) // the dependency we are using here is password coz we only use the state variable which we can relate to and which is in this case we want to copy the password so we are currently only interested in password.

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]) // it runs whenever the page loads and also it runs whenever the dependencies updates or changes.


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='flex shadow rounded-lg text-center my-3'>Password Generator</h1>

      {/* input */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly //this is the reference element we are taking refernce from and manipulating using useRef hook ref={passwordRef} 
        />  
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>

        {/* slider */}
        <div className='flex items-center gap-x-1'>

          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} 
          
          //Event Object: e contains details about the event, including e.target.value, which holds the new value from the input field.

          //The input field's value is controlled by the 'length' state.

          //slider i.e., range will not work until we give onchange function .

          //e.target.value provides the new value from the input field, which is passed to setLength to update the state.
           />

          <label >Length:{length} </label>
        </div>

        

        {/* number check box */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
           />
           <label htmlFor="numberInput">Numbers</label>

        </div>

        {/* character check box */}

        <div className='flex items-center gap-x-1'>

          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
              setCharAllowed((prev)=>!prev);  {/* interview vedio watch 8 min  */}
            }} 
            />
              <label htmlFor="characterInput">Characters</label>
        </div>



      </div>

     </div>
    </>
  )
}

export default App



// this is an example for line 24 ==>       pass += str.charAt (char )

//1st iteration
// pass = pass+ str.chatAt(char)
// pass = pass+ str.chatAt(3)
// pass = pass+ str.chatAt(3)
// pass = pass+ 'D'
// ' ' =pass+'D'
// ' '=' ' + 'D'
// pass = 'D'


//2nd iteration
// //coz the previous value of the pass is 'D'
// pass = pass+ str.chatAt(char)
// pass = pass+ str.chatAt()
// pass = pass+ str.chatAt(9)
// pass = pass+ 'J'
// 'D' =pass+'J'
// 'D'='D' + 'J'
// 'D' = 'DJ'
// pass = 'DJ'

// |||ly for every iteration the single seperate charcter will get appended 

