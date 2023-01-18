import React, {useState, useEffect} from 'react';
import "./portfolio.css";
import portfolioData from '../portfolioData.js';

const Portfolio = () => {

  const [projects, setProjects] = useState([])
    
  useEffect(()=>{
      async function getProjects(){
          const response = await fetch("http://127.0.0.1:8000/api/project_list/")
          const data = await response.json()
          console.log(data)
          setProjects(data)
      }
      getProjects()
  }, [])



  const portfolioProjects = projects.map(data => {
    return <article key={data.id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={data.project_picture} alt={`Picture of the website ${data.project_name}`} />
            </div>
            <h3>{data.project_name}</h3>
            <div className="portfolio__item-cta">
              {data.has_github_repo && <a target="_blank" href={data.github_url} className='btn'>Github</a>}
              {data.has_live_website && <a href={data.live_site_url} className='btn btn-primary' target="_blank">Live Website</a>}
            </div>
            
    </article>
  })

  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {portfolioProjects}
        </div>

    </section>
  )
}

export default Portfolio