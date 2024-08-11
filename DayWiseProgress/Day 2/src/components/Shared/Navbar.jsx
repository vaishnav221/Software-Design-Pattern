import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  return (
    <div className="absolute top-0 left-0 w-full h-[12vh] flex flex-row justify-center items-center shadow-sm" style={{ boxShadow: '0 1px 2px rgba(167, 114, 5, 0.5)' }}>
      <div className="w-1/4 h-full font-bold flex justify-start items-center text-lg" style={{ color: '#A77205' }}>BashBarn</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path} style={{ color: '#A77205' }}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        {/* <ModeToggle /> */}
      </div>
    </div>
  )
}

export default Navbar
