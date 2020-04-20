import React from 'react'
import DashboardListItem from './DashboardListItem'

const DashbaordList = ({ children, listData }) => {
  return (
    <div class='dashboard'>
      {children}
      <ul class='dashboard__list'>
        {listData.map(row => (
          <DashboardListItem
            player={row.playerWon}
            amount={row.winAmount}
            time={row.time}
            game={row.gameName}
          />
        ))}
      </ul>
    </div>
  )
}

export default DashbaordList
