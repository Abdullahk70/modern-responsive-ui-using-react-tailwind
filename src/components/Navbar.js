import React from 'react'
import { useState } from 'react'
import {logo,close,menu} from "../assets/assets"
import {navLinks} from "../constants"

const Navbar = () => {

  const [toggle,setToggle]=useState(false);
  return (
    <nav className="w-120 flex justify-between items-center py-6 navbar">
<img src={logo} alt="Hoobank" className="w-[124px] h-[32px]"/>
<ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
  {
    navLinks.map((itm,index)=>(
<li key={itm.id}
className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1?'mr-0':'mr-10'}`}
>
  <a href={`#${itm.id}`}>
    {itm.title}
  </a>
</li>
    ))
  }
  
</ul>

<div className="sm:hidden flex flex-1 justify-end items-center">
<img src={toggle?close:menu} alt="menu" />
</div>
    </nav>
  )
}

export default Navbar
