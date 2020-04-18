import React, { useState, useEffect } from 'react'
import { LastGamesAvatarsData, DashboardListData } from '../../data/LastGames'
import LastGamesAvatar from './LastGamesAvatar'
import DashboardList from './DashboardList'
import LastGamesInfo from './LastGamesInfo'

const LastGamesBoard = () => {
  const [isActive, setIsActive] = useState('wheel')
  const [listData, setListData] = useState([])

  // Handle clicking of avatars (styling and data changes)
  const handleIsActive = avatarName => {
    setIsActive(avatarName)
    setListData(DashboardListData.filter(data => data.gameName === avatarName))
  }

  // Load the Wheel data on initial load of the page
  useEffect(() => {
    setListData(DashboardListData.filter(data => data.gameName === isActive))
  }, [])

  return (
    <div class='last-games__wrapper'>
      <div class='dashboard__container'>
        <div class='dashboard__avatars'>
          {LastGamesAvatarsData.map((avatar, index) => (
            <LastGamesAvatar
              setIsActive={handleIsActive}
              key={index}
              image={avatar.image}
              avatarName={avatar.name}
              isActive={isActive}
            />
          ))}
        </div>
        <DashboardList listData={listData} />
      </div>
      <LastGamesInfo />
    </div>
  )
}

export default LastGamesBoard
