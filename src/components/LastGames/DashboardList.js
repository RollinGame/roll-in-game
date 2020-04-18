import React from 'react'
import DashboardListItem from './DashboardListItem'

const DashbaordList = ({ listData }) => {
  return (
    <div class='dashboard'>
      <ul class='dashboard__list'>
        {listData.map(row => (
          <DashboardListItem player={row.playerWon} amount={row.winAmount} time={row.time} />
        ))}
      </ul>
    </div>
  )
}

export default DashbaordList
