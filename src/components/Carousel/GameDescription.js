import React from 'react'
import { Link } from 'react-router-dom'
import PlayersIMG from '../../images/player.svg'
import StarIMG from '../../images/star.svg'

const GameDescription = ({ game }) => {
  return (
    <div class='game-description'>
      <h4 class='game-description__trending-text'>Trending Now</h4>
      <h1 class='game-description__title'>{game.gameTitle}</h1>
      <div class='game-description__specs'>
        <div>
          <p>Min Bet: {game.minBet}</p>
        </div>
        <div class='game-description__divider'>
          <p>|</p>
        </div>
        <div>
          <p>MAX Players: {game.maxPlayers}</p>
        </div>
      </div>
      <div class='game-description__text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores sit magnam
          repudiandae impedit tenetur temporibus consequuntur corporis aperiam.
        </p>
      </div>
      <div>
        <Link to='dice' class='btn btn__play'>
          Start Game
          <span>
            <div class='btn__play--arrow' />
          </span>
        </Link>
      </div>
      <div class='game-description__player-stats'>
        <div>
          <span class='game-description__player-stats--img'>
            <img src={PlayersIMG} />
          </span>
          Players: {game.players}
        </div>
        <div>
          <span class='game-description__player-stats--img'>
            <img src={StarIMG} />
          </span>
          Online: {game.playersOnline}
        </div>
      </div>
    </div>
  )
}

export default GameDescription
