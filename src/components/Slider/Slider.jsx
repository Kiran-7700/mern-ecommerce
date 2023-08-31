import React from 'react'
import SlideCard from './SlideCard';
import "./Slider.css"

function Slider() {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default Slider;