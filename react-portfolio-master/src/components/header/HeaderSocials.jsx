import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header__socials flex'>
        <a href="https://www.linkedin.com/in/jacob-peat-7b524417a/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/jjconway23" target="_blank"><BsGithub /></a>
        {/* <a href="" target="_blank"></a> */}


    </div>
  )
}

export default HeaderSocials