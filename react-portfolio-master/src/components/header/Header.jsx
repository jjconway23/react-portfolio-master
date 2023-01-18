import React from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderSocials from './HeaderSocials';
import "./header.css";
import ME from "../../assets/ME.jpg"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jacob Peat</h1>
        <h5>Junior Full Stack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me-container">
            <p>Software Developer currently undertaking a Full stack Software Development Diploma from Code Institute. Skilled in HTML, CSS JavaScript, Java, Python and Django.  </p>
            
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
};

export default Header