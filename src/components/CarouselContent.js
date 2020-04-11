import React from 'react';
import GameDescription from './GameDescription'

const CarouselContent = ({game}) => {

const imageUrl = require(`../images/${game.image}.png`);

  return (
    <div class="container__carousel" style={{backgroundImage: `url(${imageUrl})`}}>
      <GameDescription game={game} />
    </div>
  )
}

export default CarouselContent;