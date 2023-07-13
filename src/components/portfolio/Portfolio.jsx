import React from 'react'
import './portfolio.css'
import img1 from '../../assets/concierge.jpg'
import img2 from '../../assets/criticalmass.jpg'
import img3 from '../../assets/oksanakim.jpg'

const data = [
  {
    id:1,
    image: img1,
    title: 'Concierge Service Design',
    figma: "figma.com",
    demo: "", 
  }, 
  {
    id:2,
    image: img2,
    title: 'Digital Newsletter Design',
    figma: "figma.com",
    demo: "", 
  }, 
  {
    id:3,
    image: img1,
    title: 'Personal Website Design',
    figma: "figma.com",
    demo: "", 
  },
  {
    id:4,
    image: img3,
    title: 'Personal Website Design',
    figma: "figma.com",
    demo: "", 
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, figma, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={figma} className='btn' target='_blank'>Figma</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio