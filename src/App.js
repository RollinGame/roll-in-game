import React from 'react'

import Carousel from './components/Carousel/Carousel'
import LastGamesBoard from './components//LastGames/LastGamesBoard'
import DailyRaffle from './components/DailyRaffle/DailyRaffle'
import Benefits from './components/Benefits/Benefits'

const App = () => {
  return (
    <div>
      <Carousel />
      <LastGamesBoard />
      <DailyRaffle />
      <Benefits />
    </div>
  )
}

export { App as default }
