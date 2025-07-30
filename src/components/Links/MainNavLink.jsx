import React from 'react'
import { NavLink } from 'react-router-dom'


const MainNavLinks = () => {
  return (
    <div>
         <NavLink to='/' style={{marginRight:"20px"}}>Home</NavLink>
        <NavLink  to='/about' style={{marginRight:"20px"}}>About</NavLink>
        <NavLink  to='/contact' style={{marginRight:"20px"}}>Contact</NavLink>
        <NavLink to='/header' style={{marginRight:"20px"}}>Header</NavLink>
        <NavLink to='/projects' style={{marginRight:"20px"}}>Projects</NavLink>
    </div>
  )
}

export default MainNavLinks
