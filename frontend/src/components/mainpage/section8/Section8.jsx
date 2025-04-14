import React, { useRef, useState, useEffect } from 'react'
import './Section8.css'
import Rowhead from './Rowhead'
import Investcard from './Investcard'
import Offercard from './Offercard'
import trustpayMoneyLogo from '../../../images/trustpay-money.png'
import trustpayTravelLogo from '../../../images/trustpay-travel.png'
import { data } from '../../../state'

function Section8() {
  const { investcard, offercard } = data;
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  // Calculate visible items based on container width
  const getVisibleItemCount = (containerWidth) => {
    if (containerWidth > 1200) return 4;
    if (containerWidth > 768) return 3;
    if (containerWidth > 480) return 2;
    return 1;
  };

  // Scroll handling functions
  const scroll = (ref, direction, setIndex, itemCount) => {
    if (ref.current) {
      const visibleCount = getVisibleItemCount(ref.current.offsetWidth);
      const itemWidth = ref.current.offsetWidth / visibleCount;
      
      let newIndex;
      if (direction === 'left') {
        newIndex = Math.max(0, activeIndex1 - 1);
      } else {
        newIndex = Math.min(itemCount - visibleCount, activeIndex1 + 1);
      }
      
      ref.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      });
      
      setIndex(newIndex);
    }
  };

  // Update active index on scroll
  const handleScroll = (ref, setIndex, itemCount) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const visibleCount = getVisibleItemCount(ref.current.offsetWidth);
      const itemWidth = ref.current.offsetWidth / visibleCount;
      const newIndex = Math.floor(scrollLeft / itemWidth);
      setIndex(Math.min(newIndex, itemCount - visibleCount));
    }
  };

  // Add scroll event listeners
  useEffect(() => {
    const row1Element = row1Ref.current;
    
    if (row1Element) {
      const handleRow1Scroll = () => handleScroll(row1Ref, setActiveIndex1, investcard.length);
      row1Element.addEventListener('scroll', handleRow1Scroll);
      return () => row1Element.removeEventListener('scroll', handleRow1Scroll);
    }
  }, [investcard.length]);

  useEffect(() => {
    const row2Element = row2Ref.current;
    
    if (row2Element) {
      const handleRow2Scroll = () => handleScroll(row2Ref, setActiveIndex2, offercard.length);
      row2Element.addEventListener('scroll', handleRow2Scroll);
      return () => row2Element.removeEventListener('scroll', handleRow2Scroll);
    }
  }, [offercard.length]);

  return (
    <section className='section8-wrapper'>
      <div className="section8-container">
        <div className="carousel-section">
          <Rowhead
            imgURL={trustpayMoneyLogo}
            para={"Get started on wealth creation journey with Zero brokerage fee & no hidden charges."} />

          <div className="carousel-container">
            <button 
              className="carousel-button carousel-button-left" 
              onClick={() => scroll(row1Ref, 'left', setActiveIndex1, investcard.length)}
              disabled={activeIndex1 === 0}
              aria-label="Scroll left"
            >
              &lt;
            </button>

            <div className="carousel-row" ref={row1Ref}>
              <div className="carousel-overflow-container">
                {investcard.map((card, index) => {
                  const visibleCount = getVisibleItemCount(row1Ref.current?.offsetWidth || window.innerWidth);
                  const isPeekCard = index === activeIndex1 + visibleCount;
                  
                  return (
                    <div 
                      className={`carousel-item`} 
                      key={index}
                    >
                      <Investcard imgURL={card.imgURL} heading={card.heading} />
                    </div>
                  );
                })}
              </div>
            </div>

            <button 
              className="carousel-button carousel-button-right" 
              onClick={() => scroll(row1Ref, 'right', setActiveIndex1, investcard.length)}
              disabled={activeIndex1 >= investcard.length - getVisibleItemCount(row1Ref.current?.offsetWidth || window.innerWidth)}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          </div>
          
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(investcard.length / getVisibleItemCount(row1Ref.current?.offsetWidth || window.innerWidth)) }).map((_, index) => (
              <span 
                key={index} 
                className={`carousel-indicator ${Math.floor(activeIndex1 / getVisibleItemCount(row1Ref.current?.offsetWidth || window.innerWidth)) === index ? 'active' : ''}`}
                onClick={() => {
                  if (row1Ref.current) {
                    const visibleCount = getVisibleItemCount(row1Ref.current.offsetWidth);
                    const newIndex = index * visibleCount;
                    const validIndex = Math.min(newIndex, investcard.length - visibleCount);
                    
                    row1Ref.current.scrollTo({
                      left: validIndex * (row1Ref.current.offsetWidth / visibleCount),
                      behavior: 'smooth'
                    });
                    
                    setActiveIndex1(validIndex);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="carousel-section">
          <Rowhead
            imgURL={trustpayTravelLogo}
            para={"Best travel solutions with quick ticket bookings, great offers and easy refunds"} />

          <div className="carousel-container">
            <button 
              className="carousel-button carousel-button-left" 
              onClick={() => scroll(row2Ref, 'left', setActiveIndex2, offercard.length)}
              disabled={activeIndex2 === 0}
              aria-label="Scroll left"
            >
              &lt;
            </button>

            <div className="carousel-row" ref={row2Ref}>
              <div className="carousel-overflow-container">
                {offercard.map((card, index) => {
                  const visibleCount = getVisibleItemCount(row2Ref.current?.offsetWidth || window.innerWidth);
                  return (
                    <div 
                      className={`carousel-item`} 
                      key={index}
                    >
                      <Offercard imgURL={card.imgURL} heading={card.heading} />
                    </div>
                  );
                })}
              </div>
            </div>

            <button 
              className="carousel-button carousel-button-right" 
              onClick={() => scroll(row2Ref, 'right', setActiveIndex2, offercard.length)}
              disabled={activeIndex2 >= offercard.length - getVisibleItemCount(row2Ref.current?.offsetWidth || window.innerWidth)}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          </div>
          
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(offercard.length / getVisibleItemCount(row2Ref.current?.offsetWidth || window.innerWidth)) }).map((_, index) => (
              <span 
                key={index} 
                className={`carousel-indicator ${Math.floor(activeIndex2 / getVisibleItemCount(row2Ref.current?.offsetWidth || window.innerWidth)) === index ? 'active' : ''}`}
                onClick={() => {
                  if (row2Ref.current) {
                    const visibleCount = getVisibleItemCount(row2Ref.current.offsetWidth);
                    const newIndex = index * visibleCount;
                    const validIndex = Math.min(newIndex, offercard.length - visibleCount);
                    
                    row2Ref.current.scrollTo({
                      left: validIndex * (row2Ref.current.offsetWidth / visibleCount),
                      behavior: 'smooth'
                    });
                    
                    setActiveIndex2(validIndex);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section8