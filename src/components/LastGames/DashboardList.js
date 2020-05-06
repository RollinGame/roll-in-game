import React from 'react'
import DashboardListItem from './DashboardListItem'

const DashbaordList = ({ children, listData }) => {
  return (
    <div class='dashboard'>
      {children}
      <ul class='dashboard__list'>
        {listData.map(row => (
          <DashboardListItem
            // player={row.playerWon}
            alias={row.alias}
            payout={`${row.payout} ${row.currency}`}
            time={row.timeStamp}
            game={row.game}
          />
        ))}
      </ul>
    </div>
  )
}

export default DashbaordList
