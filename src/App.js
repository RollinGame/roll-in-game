import React from 'react'

import Carousel from './components/Carousel/Carousel'
import LastGamesBoard from './components//LastGames/LastGamesBoard'
import DailyRaffle from './components/DailyRaffle/DailyRaffle'

const App = () => {
  return (
    <div>
      <Carousel />
      <LastGamesBoard />
      <DailyRaffle />
    </div>
  )
}

export { App as default }
