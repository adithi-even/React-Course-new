import React from 'react'
import {Container , LogoutBtn , Logo} from '../Index'
import { Link , useNavigate } from 'react-router-dom' //useNavigate: A hook used to programmatically navigate to different routes.
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    ////For example, Login and Signup are visible only if authStatus is false, meaning the user is not logged in. All Posts and Add Post are visible when authStatus is true, i.e., the user is authenticated.
    {  
     name : 'Home',
      slug : '/',
      staues : active
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // authStatus is false
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,//authStatus is true
  },
  ] 

  return (
    <header className=''>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
            <Logo width='70px'  //logo from the logo.jsx
            //Clicking on the logo sends the user to the homepage ('/' route) via Link.
            />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>(
              item.active?(  //if the value of active is (authStatus) which is true then 1st condition will run or if the value of active is (!authStatus) which is false then it is gonna execute the 2nd condition which will be null as in the line
                //we have to add the keys where HTML element is repeating 
                <li key={item.name}>
                  <button onClick={()=>navigate(item.slug)} 
                  className='p-3'  
                  >{item.name}</button>
                </li>
              ) :null
            ))}
            {authStatus && {
              
            }}
          </ul>
        </nav>
      </Container>

    </header>

  )
}

export default Header