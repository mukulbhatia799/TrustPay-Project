// Section7.jsx - Scrollable carousel without buttons
import React, { useEffect, useState, useRef } from 'react'
import './Section7.css'
import Longcard from './Longcard'
import { data } from '../../../state'

function Section7() {
  const { longCard } = data;
  const [cardsToShow, setCardsToShow] = useState(4);
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  
  // Determine how many cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1.2);  // Show 1 card + peek of next
      } else if (window.innerWidth < 768) {
        setCardsToShow(2.2);  // Show 2 cards + peek of next
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3.2);  // Show 3 cards + peek of next
      } else {
        setCardsToShow(3.8);  // Show 3.8 cards (slight peek of 4th)
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate max scroll and update scroll position on scroll
  useEffect(() => {
    if (carouselRef.current) {
      const updateScrollInfo = () => {
        const container = carouselRef.current;
        setScrollPosition(container.scrollLeft);
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };
      
      updateScrollInfo();
      carouselRef.current.addEventListener('scroll', updateScrollInfo);
      window.addEventListener('resize', updateScrollInfo);
      
      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('scroll', updateScrollInfo);
        }
        window.removeEventListener('resize', updateScrollInfo);
      };
    }
  }, [cardsToShow]);
  
  // Calculate the number of dot indicators needed
  const totalDots = Math.ceil(longCard.length / Math.floor(cardsToShow));
  
  // Calculate which dot should be active based on scroll position
  const activeDotIndex = Math.min(
    Math.floor((scrollPosition / maxScroll) * totalDots),
    totalDots - 1
  );

  // Scroll to a specific section when clicking on a dot
  const scrollToSection = (index) => {
    if (carouselRef.current) {
      const sectionWidth = maxScroll / (totalDots - 1 || 1);
      carouselRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className='section7-wrapper'>
      <h1>Business Tools to help your business grow</h1>

      <div className="carousel-outer-container">
        <div 
          className="section7-container" 
          ref={carouselRef}
        >
          {longCard.map((card, index) => (
            <div 
              className="carousel-card-wrapper" 
              key={index}
              style={{ 
                flex: `0 0 calc(100% / ${cardsToShow})` 
              }}
            >
              <Longcard 
                imgURL={card.imgURL} 
                heading={card.heading} 
                para={card.para} 
              />
            </div>
          ))}
        </div>
      </div>

      {totalDots > 1 && (
        <div className="carousel-indicators">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${activeDotIndex === index ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Section7