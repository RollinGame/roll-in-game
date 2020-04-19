import React, { useState, useEffect } from 'react'
import RaffleCTA from './RaffleCTA'
import Jackpot from './Jackpot'
import DashboardList from '../LastGames/DashboardList'
import { RaffleWinners } from '../../data/LastGames'

const DailyRaffle = () => {
  const [listData, setListData] = useState([])

  useEffect(() => {
    setListData(RaffleWinners.slice(0, 10))
  }, [])

  return (
    <div class='raffle-container'>
      <RaffleCTA />
      <Jackpot />
      <DashboardList listData={listData}>
        <h2 class='dashboard__title'>Latest Winners</h2>
      </DashboardList>
    </div>
  )
}

export default DailyRaffle
