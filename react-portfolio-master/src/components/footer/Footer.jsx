import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='flex'>
        
        <ul className="permalinks flex">
          <li><a href="#">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__copyright">
            <small>&copy; Jacob Peat. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer