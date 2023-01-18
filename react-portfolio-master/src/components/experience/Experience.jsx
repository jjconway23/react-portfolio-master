import React from 'react';
import "./experience.css";
import {BsFillCheckSquareFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id="experience">
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>HTML</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>CSS3</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Javscript</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>React</h4>
              </article>
            </div>

          </div>
          <div className="backend__experience">
            <h3>Backend Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Python</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Django</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Flask</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Spring</h4>
              </article>
              <article className="experience__details">
                <BsFillCheckSquareFill className="experience__details-icon"/>
                <h4>Java</h4>
              </article>
          </div>

          </div>

        </div>

    </section>
  )
}

export default Experience