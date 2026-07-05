import React from 'react'
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <NavLink className={({isActive}) => isActive ? "activelink" : ""} to="." end>Coffee House</NavLink>
      <NavLink className={({isActive}) => isActive ? "activelink" : ""} to="OurCoffee">Our coffee</NavLink>
      <NavLink className={({isActive}) => isActive ? "activelink" : ""} to="ForYourPleasure">For your pleasure</NavLink>
    </nav>
  )
}

export default Menu