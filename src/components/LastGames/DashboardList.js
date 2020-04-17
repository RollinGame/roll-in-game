import React from 'react';
import DashboardListItem from './DashboardListItem';

const DashbaordList = ({listData}) => {


  return (
    <ul class="dashboard__list">
      {listData.map((row) => (
        <DashboardListItem player={row.playerWon} amount={row.winAmount} time={row.time}/>
      ))}
    </ul>
  )
}

export default DashbaordList;