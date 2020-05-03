import React from 'react'

import Carousel from './components/Carousel/Carousel'
import LastGamesBoard from './components//LastGames/LastGamesBoard'
import DailyRaffle from './components/DailyRaffle/DailyRaffle'
import Benefits from './components/Benefits/Benefits'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Carousel />
      <LastGamesBoard />
      <DailyRaffle />
      <Benefits />
      <Footer />
    </div>
  )
}

export { App as default }
