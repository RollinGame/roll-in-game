import React from 'react';

const DashboardListItem = ({player, amount, time}) => {


  return (
  <li>
    <div>{player}</div>
    <div><img src={require(`../../images/twitter.svg`)}></img><span>{amount}</span></div>  
    <div>{time}</div>    
  </li>
  )
}

export default DashboardListItem;