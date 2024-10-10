import React from 'react'
import {Container , LogoutBtn , Logo} from '../Index'
import { Link , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {  
     name : 'Home',
      slug : '/',
      staues : active
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
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
      active: authStatus,
  },
  ]

  return (
    <header className=''>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
            <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>(
              item.active?(  
                //we have to add the keys where HTML element is repeating 
                <li key={item.name}>
                  <button onClick={()=>navigate}>{item.name}</button>
                </li>
              ) :null
            ))}


          </ul>
        </nav>
      </Container>

    </header>

  )
}

export default Header