import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'
import {button , Input , Logo } from './Index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register , handleSubmit} = useForm()
  const [error , setError] = useState("")
  
  const login = async(data) => { //TODO: UNDERSTAND THIS LOGIC  
    setError("") //when ever we start the process of login , set the error to null or setting the error to empty or clean or empty the error
    try {
      const session = await authService.login(data) //if session is there then the user is logged in if the sesssion is not there there then the user is not logged in .
      if(session){
        const userData = await authService.getCurrentUser()
        if(userData)dispatch(authLogin(userData));
        navigate("/") //after the user logged in we can programatically send the user to other pages through (navigate) not like link coz for link we have to click on that but here we are sending the user programatically to other page through (navigate)
      }
      
    } catch (error) {
      setError(error.message) // if there is any error we are going to store it in the state , and after that we will condittionally render it , if we wanna show the error to the user or not .
    }
  }
  return (
    <div>

      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                        Sign Up
                    </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p> }
        

        <form //handleSubmit has become a keyword which comes from the  useForm , and whenever the form gets submit the handle submit is an event which is gonna run 
         onSubmit={handleSubmit(login)} className='mt-8'>
          <div  className='space-y-5'>
            <Input
            label="Email:"
            placeholder = "Enter your Email "
            type = "email"
            {...register("email"),{
              required : true ,
              validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
              }//regEXR regular Expression
              
            }} ///to notify which input is this for ex:this particular input is the email input so we have named it email , for others we will name as password etc
            />

          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login


 