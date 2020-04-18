import React from 'react';
import PlayIMG from '../../images/play.svg';

const CarouselButtons = () => {

  const diceUrl = require(`../../images/Dice-logo.svg`);

  return (
    <div class="carousel-buttons">

    <button class="btn btn__dice u-margin-right-medium" 
            style={{backgroundImage: `url(${diceUrl})`, backgroundSize: 'cover', backgroundPosition: 'right'}} />

      <button class="btn btn__focus">
        <div class="btn__container">
          <span class="btn__focus--image u-margin-bottom-small"><img src={PlayIMG}></img> </span>
          <span class="btn__focus--text">Start Game</span>
        </div>       
      </button>

      <button class="btn btn__dice u-margin-left-medium" 
              style={{backgroundImage: `url(${diceUrl})`, backgroundSize: 'cover', backgroundPosition: 'right'}} />
    </div>
  );
}

export default CarouselButtons;