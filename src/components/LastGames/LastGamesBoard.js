import React, { useState } from 'react'
import { LastGamesAvatarsData } from '../../data/LastGames';
import LastGamesAvatar from './LastGamesAvatar';


const LastGamesBoard = () => {

  const [isActive, setIsActive] = useState('wheel');

  const handleIsActive = (avatarName) => {
    setIsActive(avatarName);
  }

  return (
    <div class="section__container">
    <div class="last-games__wrapper">
      <div class="last-games__container">
      <div class="last-games__avatars">
      {LastGamesAvatarsData.map((avatar, index) => (
        <LastGamesAvatar setIsActive={handleIsActive} key={index} image={avatar.image} avatarName={avatar.name} isActive={isActive}/>
        ))}
    </div>
      </div>
      <div class="last-games__info">
      
      </div>
    </div>
      
    </div>
    
  )
}

export default LastGamesBoard;