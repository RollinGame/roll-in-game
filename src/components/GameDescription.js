import React from 'react';
import PlayersIMG from '../images/player.svg';
import StarIMG from '../images/star.svg';

const GameDescription = ({betSize, maxPlayers, players, playersOnline}) => {


  return (
    <div class="game-description">
      <h4 class="game-description__trending-text">Trending Now</h4>
      <h1 class="game-description__title">Rollin Wheel</h1>
      <div class="game-description__specs">
        <div>
          <p>Min Bet: {betSize}</p>
        </div>
        <div class="game-description__divider"><p>|</p></div>
        <div>
          <p>MAX Players: {maxPlayers}</p>
        </div>
      </div>
      <div class="game-description__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores sit magnam repudiandae impedit tenetur temporibus consequuntur corporis aperiam.</p>
      </div>
      <div>
        <button class="btn btn__play">Start Game 
          <span><div class="btn__play--arrow"></div></span>
        </button>
      </div>
      <div class="game-description__player-stats">
          <div>
            <span class="game-description__player-stats--img"><img src={PlayersIMG}></img></span>
            Players: {players}
          </div>
        <div>
          <span class="game-description__player-stats--img"><img src={StarIMG}></img></span>
          Online: {playersOnline}
        </div>
      </div>        
      
    </div>
  )
}

GameDescription.defaultProps = {
  betSize: '0.42ETH',
  maxPlayers: 6,
  players: 1324,
  playersOnline: 489
}

export default GameDescription;