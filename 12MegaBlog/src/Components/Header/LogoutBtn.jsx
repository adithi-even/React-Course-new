import React from 'react'
import {useDispatch} from 'react-redux' 
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


//Handling the Promise: The ".then" method is used to define what happens once the logout operation completes successfully. If the logout is successful, the function passed to ".then" will execute

function LogoutBtn() {

  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(()=>{
      dispatch(logout()) //here we are using this coz, so that the imp. info should be updated in the store 
    })
    .catch((error)=>{
      console.log("logout- error" , error);
      
    })
    
  }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn