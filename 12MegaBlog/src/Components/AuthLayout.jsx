import React ,{useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// What is AuthLayout?
// AuthLayout is a wrapper component that checks if the user is authenticated or not before showing the content inside it.
// It uses the Protected function to manage this logic.

export default function Protected({
    children, //children refers to whatever is inside the AuthLayout component in the JSX.
    authentication = true
    // What does "authentication = true" mean?
        // "authentication" is a prop that decides what kind of check the "AuthLayout" should do:

        // If "authentication = true" (the default value), the route is for authenticated users only (like "/add-post").
        // If "authentication = false", the route is for unauthenticated users only (like "/signup" or "/login").
}) {
    
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>{
        // TODO:make it more easy

        // if(authStatus === true){
        //     navigate("/") 
        // }else if (authStatus === false){
        //     navigate("/login")            
        // }

        // let authValue = authStatus === true ? true : false

        if (authentication && authStatus !== authentication) {
            navigate("/login")            
        }else if(!authentication && authStatus !== authentication) {
            navigate("/")            

        }
        setLoader(false)
    },[authStatus, navigate, authentication])



    return loader ? <h1>Loading...</h1> : <>{children}</>
  }
  