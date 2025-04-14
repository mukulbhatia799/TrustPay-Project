import React from 'react'
import './Section2.css'
import Card from '../card/Card'
import {data} from '../../../state'

function Section2() {
  const {servicesState} = data;
  
  return (
    <section className='section2-wrapper'>
      <div className='section2-container'>
        <h1 className="section2-heading">Recharge & Pay Bills on TrustPay.</h1>
        
        {/* Carousel for all screen sizes */}
        <div className="carousel-container">
          <div className="flex overflow-hidden group">
            <div className="flex animate-loop-scroll group-hover:paused">
              {servicesState.map((card, index) => (
                <div className="carousel-item" key={`first-${index}`}>
                  <Card imgURL={card.imgURL} cardMessage={card.cardMessage} />
                </div>
              ))}
            </div>
            <div className="flex animate-loop-scroll group-hover:paused" aria-hidden="true">
              {servicesState.map((card, index) => (
                <div className="carousel-item" key={`second-${index}`}>
                  <Card imgURL={card.imgURL} cardMessage={card.cardMessage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2