import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Arrow from './Arrow';
import SlideData from '../carousel-data/SlideData';
import CarouselContent from './CarouselContent';
import '../styles/components/_slider.css';

const Carousel = () => {

  return (
    <div>
      <Slider 
      className="slider__wrapper"
      previousButton={<Arrow direction="left"/>} 
      nextButton={<Arrow direction="right" />}>  

        {SlideData.map((game, index) => (
          <div
            game={game}
            key={index}>
            <CarouselContent game={game} />
          </div>
        ))}
        
      </Slider>
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#fff" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
      
  )
}

export { Carousel as default }