import React from 'react';
import GameDescription from './GameDescription'
import CarouselButtons from './CarouselButtons';

const CarouselContent = ({game}) => {

const imageUrl = require(`../../images/${game.image}.png`);

  return (
    <div class="container__carousel" style={{backgroundImage: `url(${imageUrl})`}}>
      <GameDescription game={game} />
      <CarouselButtons />
    </div>
  )
}

export default CarouselContent;