import React from 'react'
import "./about.css";
import ME from "../../assets/ME.jpg"
import {FaAward} from "react-icons/fa"
const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container">
          <div className="about__me">
            <div className="about_me-image">
              {/* <img src={ME} alt="About Image" /> */}
            </div>

          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward />
                <h5>Experience</h5>
                <small>1+ Years of Studying</small>
              </article>
              <article className="about__card">
                <FaAward />
                <h5>Experience</h5>
                <small>1+ Years of Studying</small>
              </article>
              <article className="about__card">
                <FaAward />
                <h5>Experience</h5>
                <small>1+ Years of Studying</small>
              </article>
            </div>

          </div>
        </div>

    </section>
  )
}

export default About