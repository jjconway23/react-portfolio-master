import React, {useState} from 'react';
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BiBook} from 'react-icons/bi'
import {BsLaptopFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'

import "./nav.css";
const Nav = () => {
  const [activeClass , setActiveClass] = useState("#")
  return (
    <nav className='flex'>
      <a href="#" onClick={()=> setActiveClass("#")} className={activeClass === "#" ? "active" : ""}><AiFillHome /></a>
      {/* <a href="#about" onClick={()=> setActiveClass("about")} className={activeClass === "about" ? "active" : ""}><SiAboutdotme /></a> */}
      <a href="#experience" onClick={()=> setActiveClass("experience")} className={activeClass === "experience" ? "active" : ""}><BiBook/></a>
      <a href="#portfolio" onClick={()=> setActiveClass("portfolio")} className={activeClass === "portfolio" ? "active" : ""}><BsLaptopFill /></a>
      <a href="#contact" onClick={()=> setActiveClass("contact")} className={activeClass === "contact" ? "active" : ""}><AiFillMessage /></a>

    </nav>
  )
}

export default Nav