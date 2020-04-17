import React from 'react';

import Carousel from './components/Carousel/Carousel';
import LastGamesBoard from './components//LastGames/LastGamesBoard';


const App = () => {

  return (
    <div>
      <Carousel />
      <LastGamesBoard />
    </div>
  )
}

export { App as default }