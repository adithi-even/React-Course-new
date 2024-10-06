import React ,{ useState , useCallback, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login , logout } from './store/authSlice'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [loading, setLoading] = useState(true) //whenever the data is fetching from the server or the network the loading should be shown ??
  const dispatch  = useDispatch() //to make to bring the current user or etc

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())

      }
    })
    .finally(()=>setLoading(false))
  } , [])
  
  return !loading?
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        TODO: {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>

  </div> 
  : null
}

export default App
